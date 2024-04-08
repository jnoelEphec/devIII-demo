import express, { Request, Response } from 'express';
const router = express.Router();
const KanbanCard = require('../databases/mongodb/entities/kanbanCard');

// Création d'une carte Kanban
// #swagger.tags = ['Kanban']
// #swagger.description = 'Creates a new Kanban card'
router.post("/cards", async (req: Request, res: Response) => {
  // #swagger.responses[201] = { description: 'Kanban card created.' }
  // #swagger.responses[400] = { description: 'Invalid data provided.' }

  try {
    const card = new KanbanCard(req.body);
    const savedCard = await card.save();
    res.status(201).json(savedCard);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Récupération de toutes les cartes Kanban
// #swagger.tags = ['Kanban']
// #swagger.description = 'Returns a list of Kanban cards'
router.get("/cards", async (req: Request, res: Response) => {
  // #swagger.responses[200] = { description: 'List of Kanban cards.' }
  // Logique pour récupérer toutes les cartes Kanban
  try {
    const cards = await KanbanCard.find();
    res.json(cards);
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
});

// Récupération d'une carte Kanban spécifique
// #swagger.tags = ['Kanban']
// #swagger.description = 'Returns details of a specific Kanban card'
router.get("/cards/:id", async (req: Request, res: Response) => {
  // #swagger.responses[200] = { description: 'Kanban card details.' }
  // #swagger.responses[404] = { description: 'Kanban card not found.' }
  try {
    const card = await KanbanCard.findById(req.params.id);
    if (card) {
      res.json(card);
    } else {
      res.status(404).json({ message: "Card not found" });
    }
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
});
// Mise à jour d'une carte Kanban
// #swagger.tags = ['Kanban']
// #swagger.description = 'Updates a specific Kanban card'
router.put("/cards/:id", async (req: Request, res: Response) => {
  // #swagger.responses[200] = { description: 'Kanban card updated.' }
  // #swagger.responses[400] = { description: 'Invalid data provided.' }
  // #swagger.responses[404] = { description: 'Kanban card not found.' }
  try {
    const card = await KanbanCard.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (card) {
      res.json(card);
    } else {
      res.status(404).json({ message: "Card not found" });
    }
  } catch (error : any) {
    res.status(400).json({ message: error.message });
  }
});

// Suppression d'une carte Kanban
// #swagger.tags = ['Kanban']
// #swagger.description = 'Deletes a specific Kanban card'
router.delete("/cards/:id", async (req: Request, res: Response) => {
  // #swagger.responses[204] = { description: 'Kanban card deleted.' }
  // #swagger.responses[404] = { description: 'Kanban card not found.' }
  try {
    const card = await KanbanCard.findByIdAndDelete(req.params.id);
    if (card) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Card not found" });
    }
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;