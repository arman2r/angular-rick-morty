import { Component, OnInit, Input, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServicesService } from '../../../../services.service';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  ubication: any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public episode: any, private service: ServicesService) { }

  ngOnInit(): void {
    // console.log(this.episode);
    const urlId = this.episode.url;
    const resultId = urlId.substring(urlId.lastIndexOf('/') + 1)
    // console.log(this.episode);
    this.service.getUbication(resultId).subscribe(res => {
      this.ubication = res;
      // console.log(this.ubication)
    })
  }

}
