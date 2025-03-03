import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-slidebar',
  standalone: false,

  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {
  constructor(private gifsService: GifsService){
  }

  get tags(): string[]{
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string){
    this.gifsService.searchTag(tag);
  }

}
