import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  template: `
    <p>
      details works!
    </p>
  `,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
