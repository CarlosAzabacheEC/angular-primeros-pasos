import { CardListComponent } from './components/card-list/card-list.component';

import { HomePageComponent } from './pages/HomePage/home-page.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';






@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
      ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
