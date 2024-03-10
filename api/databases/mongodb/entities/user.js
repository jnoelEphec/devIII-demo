const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      // Dans un cas réel, le mot de passe devrait être hashé
      type: String,
      required: true,
    },
    // Ajoutez d'autres champs si nécessaire dans votre app
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
