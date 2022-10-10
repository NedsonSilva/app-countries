import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() title: string;
  @Input() region: string
  @Input() capital: string
  @Input() population: number

  constructor() { }

  ngOnInit(): void {
  }

}
