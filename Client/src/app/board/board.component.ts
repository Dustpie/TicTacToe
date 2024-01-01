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
  public board: ('X' | 'O' | null)[][];

  constructor() {
    this.board = Array(3)
      .fill(null)
      .map(() => Array(3).fill(null));
    console.log('Board', this.board);
  }

  handleClick(col: number, row: number): void {
    console.log('Square clicked:', 'row: ', row, ' col: ', col);
    // handle the click event...
  }
}
