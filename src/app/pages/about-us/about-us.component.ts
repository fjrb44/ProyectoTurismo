import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private idioma: IdiomaService) { }

  ngOnInit() {
  }

  info(id: string){
    return this.idioma.getData(id);
  }
}
