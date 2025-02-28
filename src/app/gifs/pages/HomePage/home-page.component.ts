import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GifsModule } from '../../gifs.module';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  standalone: false
})
export class HomePageComponent  {

  constructor(private gifsService: GifsService) { }

  get gifs():Gif[]{
    return this.gifsService.gifList;
  }


}
