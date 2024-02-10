import { Component, OnInit } from '@angular/core';
import { CardList } from '../../models/card-list';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent implements OnInit {
  lists: Array<CardList> = [];

  constructor() {}

  ngOnInit(): void {
    this.loadLists();
  }

  /**
   * Charge et initialise la liste des tâches à afficher.
   *
   * #### Exemple d'utilisation :
   * Supposons que `loadLists` soit appelée lors de l'initialisation du composant.
   * Les données chargées seront utilisées pour afficher les listes de tâches dans l'interface utilisateur.
   *
   * @example
   * // Appel de la méthode dans ngOnInit ou un point d'initialisation similaire
   * loadLists();
   *
   * @returns {void}
   */
  loadLists(): void {
    // [API Part]
    // Service pour récupérer les données
    // this.lists = this.listService.getLists();

    // [Base Part]
    // Exemple de données statiques (hardcoded)
    this.lists = [
      {
        id: 1,
        title: 'To Do',
        cards: [{ content: 'Task 1' }],
      },
      {
        id: 2,
        title: 'In Progress',
        cards: [{ content: 'Task 2' }],
      },
      {
        id: 3,
        title: 'Done',
        cards: [{ content: 'Task 3' }],
      },
    ];
  }
}
