import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent, BoardComponent, NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.less',
})
export class BoardComponent {
  public board: number[][] = [];
  public squares: number[] = [];

  constructor() {
    this.board = new Array(3);
    console.log(this.board);
    this.squares = Array(9).fill(null);
    console.log(this.squares);
  }
}
