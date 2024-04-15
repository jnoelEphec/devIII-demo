import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const accessTokenSecret = 'JESUISCenséEtrePrivéEtParExempleDansLe______ .env';
const refreshTokenSecret = 'AutreSecretPlusSécurisé';
const refreshTokens: string | any[] = []; // Dans un vrai scénario, stockez ceci dans une base de données ou un stockage persistant

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        // Tentez de rafraîchir le token si l'erreur est liée à l'expiration
        const refreshToken = req.body.refreshToken;
        if (refreshToken && refreshTokens.includes(refreshToken)) {
          jwt.verify(refreshToken, refreshTokenSecret, (err: any, user: any) => {
            if (err) {
              return res.sendStatus(403);
            }

            const newAccessToken = jwt.sign({ username: user.username }, accessTokenSecret, { expiresIn: '20m' });
            const newRefreshToken = jwt.sign({ username: user.username }, refreshTokenSecret, { expiresIn: '1h' });

            // Replace the old refresh token with a new one and send it back
            const refreshTokenIndex = refreshTokens.indexOf(refreshToken);
            refreshTokens[refreshTokenIndex] = newRefreshToken;

            res.json({
              accessToken: newAccessToken,
              refreshToken: newRefreshToken
            });
          });
        } else {
          return res.sendStatus(403);
        }
      } else {
        req.body.userObj = user;
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
};

export default authenticateJWT;