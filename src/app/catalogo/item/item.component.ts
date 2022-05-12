import { Component, Inject, Input, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {MatDialog} from '@angular/material/dialog';
import { EpisodeComponent } from './modals/episode/episode.component';
import { CharacterDetailComponent } from './modals/character-detail/character-detail.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() detailCharacter: any;
  episode: any = [];

  constructor(private services: ServicesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // console.log(this.detailCharacter);
     const getEpisode = this.detailCharacter.episode;
    //  console.log(getEpisode)
    const urlId = this.detailCharacter.episode[0]
    const resultId = urlId.substring(urlId.lastIndexOf('/') + 1)
    // console.log(this.episode);
    this.services.getEpisode(resultId).subscribe(res => {
      this.episode = res;
      // console.log(this.episode)
    })
  }

  openLastUbication(ubication: any){
    this.dialog.open(EpisodeComponent, {
      data: ubication,
    });
  }

  getDetailCharacter(idCharacter: any) {
    this.dialog.open(CharacterDetailComponent, {
      data: idCharacter,
    });
  }

}

