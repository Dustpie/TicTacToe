import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.less'],
})
export class SquareComponent {
  constructor() {}

  ngOnInit() {
    console.log('SquareComponent has been initialized');
  }
}
