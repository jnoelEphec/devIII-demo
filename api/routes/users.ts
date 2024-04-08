import express, { Request, Response } from 'express';
const router = express.Router();
const User = require("../databases/mongodb/entities/user");

// Création d'un utilisateur
// #swagger.tags = ['Users']
// #swagger.description = 'Creates a new user'
router.post("/", async (req: Request, res: Response) => {
  // #swagger.responses[201] = { description: 'User created.' }
  // #swagger.responses[400] = { description: 'Invalid data provided.' }
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error : any) {
    res.status(400).json({ message: error.message });
  }
});

// Récupération de tous les utilisateurs
// #swagger.tags = ['Users']
// #swagger.description = 'Returns a list of users'
router.get("/", async (req: Request, res: Response) => {
  // #swagger.responses[200] = { description: 'List of users.' }
  try {
    const users = await User.find();
    res.json(users);
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
});

// Récupération d'un utilisateur spécifique
// #swagger.tags = ['Users']
// #swagger.description = 'Returns details of a specific user'
router.get("/:id", async (req: Request, res: Response) => {
  // #swagger.responses[200] = { description: 'User details.' }
  // #swagger.responses[404] = { description: 'User not found.' }
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
});

// Mise à jour d'un utilisateur
// #swagger.tags = ['Users']
// #swagger.description = 'Updates a specific user'
router.put("/:id", async (req: Request, res: Response) => {
  // #swagger.responses[200] = { description: 'User updated.' }
  // #swagger.responses[400] = { description: 'Invalid data provided.' }
  // #swagger.responses[404] = { description: 'User not found.' }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error : any) {
    res.status(400).json({ message: error.message });
  }
});

// Suppression d'un utilisateur
// #swagger.tags = ['Users']
// #swagger.description = 'Deletes a specific user'
router.delete("/:id", async (req: Request, res: Response) => {
  // #swagger.responses[204] = { description: 'User deleted.' }
  // #swagger.responses[404] = { description: 'User not found.' }
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;