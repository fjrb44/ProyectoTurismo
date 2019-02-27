import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private idioma: IdiomaService) { }

  ngOnInit() {
  }

  info(id: string){
    return this.idioma.getData(id);
  }

}
