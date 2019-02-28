import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private idioma: IdiomaService) { }

  ngOnInit() {
  }

  info(id: string){
    return this.idioma.getData(id);
  }
}
