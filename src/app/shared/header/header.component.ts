import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private idioma: IdiomaService) { }

  ngOnInit() {
  }

  cambiarIdioma(idioma: string){
    this.idioma.cambiarIdioma(idioma);
  }

  info(id: string){
    return this.idioma.getData(id);
  }
  lang(){
    return this.idioma.getIdioma();
  }
}
