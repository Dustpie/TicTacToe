import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  template: `
    <div
      class="game-square rounded-lg border bg-teal-lightest 
      shadow-md "
    >
      <p class="text-grey-darker"></p>
    </div>
  `,
  styles: [
    `
      .game-square {
        height: 96%;
        text-align: center;
        line-height: 0.85;
        cursor: pointer;
      }

      p {
        display: inline;
        margin: 0px;
        font-size: 14rem;
        overflow: hidden;
      }

      .noClick {
        pointer-events: none;
      }
    `,
  ],
})
export class SquareComponent {}
