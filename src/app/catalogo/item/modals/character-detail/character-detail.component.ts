import { ServicesService } from './../../../../services.service';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @ViewChild('imageDetail') imageDetail: ElementRef;
  widthExp: number = 0;
  characterDetail: any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public character: any, private service: ServicesService) { }

  ngOnInit(): void {
    // console.log(this.character);
    this.service.getDetailCharacter(this.character).subscribe(res => {
      this.characterDetail = res;
      // console.log(this.characterDetail);
    }, err => {
      console.log(err)
    })
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.widthExp);
    setTimeout(() => {
      // console.log(this.imageDetail.nativeElement.offsetWidth);
      this.widthExp = (this.imageDetail.nativeElement.offsetWidth) - 48;
      console.log(this.widthExp);
    }, 500);

  }

}
