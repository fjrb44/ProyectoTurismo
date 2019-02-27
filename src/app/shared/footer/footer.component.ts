import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data: number;

  constructor(private idioma: IdiomaService) { }

  ngOnInit() {
    this.data = ((new Date()).getFullYear());
  }

  info(id: string){
    return this.idioma.getData(id);
  }
}
