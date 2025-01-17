import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  standalone:false
})
export class CardListComponent {

  @Input()
  public gifs: Gif[]= [];
}
