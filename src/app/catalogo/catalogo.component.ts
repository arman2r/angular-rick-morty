import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  allCatalog: any = [];
  sum = 1;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  totalPages: number = 0
  loadingData = false;

  constructor(private service: ServicesService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
      this.getCharacters(this.sum);
  }

  getCharacters(page: number) {
    // console.log(page)
    this.loadingData = true;
    this.service.paginator(page).subscribe((res: any) => {
      // console.log(res);
      this.allCatalog.push(res['results']);
      this.totalPages = res.info.pages
      this.loadingData = false;
      // console.log(this.allCatalog);
    }, err => {
        this.openSnackBar('No se encontraron más resultados', 'ok');
        this.loadingData = false;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  async onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 1;
    console.log(this.sum);
    this.getCharacters(this.sum);
  }

}
