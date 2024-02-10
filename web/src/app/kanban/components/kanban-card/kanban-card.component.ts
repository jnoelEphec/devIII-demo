import { Component, Inject, Input, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
})
export class KanbanCardComponent implements OnInit {
  @Input()
  card!: Card;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * Ouvre une boîte de dialogue affichant les détails d'une carte de Kanban.
   * Cette méthode utilise le service `dialog` pour ouvrir une instance de `KanbanCardDetailsDialog`,
   * en passant les données de la carte actuelle (`this.card`) comme données à la boîte de dialogue.
   *
   * ### Utilisation :
   * Cette méthode est généralement liée à un événement utilisateur, tel qu'un clic sur un bouton
   * ou une carte, déclenchant l'ouverture de la boîte de dialogue avec les détails de la carte pour
   * visualisation ou modification.
   *
   * @example
   * // Exemple d'appel de la méthode lors d'un clic sur un bouton ou une carte
   * <button (click)="openDialog()">Voir les détails</button>
   *
   * @returns {void}
   */
  openDialog() {
    this.dialog.open(KanbanCardDetailsDialog, {
      data: this.card,
    });
  }
}

@Component({
  selector: 'kanban-card-details',
  templateUrl: 'kanban-card-details.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class KanbanCardDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
  }
}
