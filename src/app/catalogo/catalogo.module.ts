import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { ItemComponent } from './item/item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EpisodeComponent } from './item/modals/episode/episode.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CharacterDetailComponent } from './item/modals/character-detail/character-detail.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    CatalogoComponent,
    ItemComponent,
    EpisodeComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    MatSnackBarModule
  ]
})
export class CatalogoModule { }
