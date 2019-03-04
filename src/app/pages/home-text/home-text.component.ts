import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-home-text',
  templateUrl: './home-text.component.html',
  styleUrls: ['./home-text.component.css']
})
export class HomeTextComponent implements OnInit {

  constructor(private idioma: IdiomaService) { }

  ngOnInit() {
  }

  info(id: string){
    return this.idioma.getData(id);
  }
}
