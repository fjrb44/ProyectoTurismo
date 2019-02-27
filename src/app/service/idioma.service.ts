import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  private idioma: string;
  private idiomas: Idioma[];

  constructor(private http: HttpClient) { 
    this.idioma = "esp";
    this.idiomas = new Array();
    
    this.loadData();
  }

  private loadData(){
    return new Promise(() => {
      this.http.get("../../assets/PageText.json").subscribe((data: Idioma[]) => {
        this.idiomas = data;
      });
    });
  }

  private verifyData(func: ()=>{}): any{

    if(this.idiomas.length === 0){
      this.loadData().then(()=>{
        return func();
      });
    }else{
      return func();
    }
  }

  cambiarIdioma(idiom: string){
    this.idioma = idiom;
  }

  getData(id: string): string{
    if(!this.idiomas[id]) return;

    return this.verifyData(() => {
      switch(this.idioma){
        case "eng":
          return this.idiomas[id].eng;
        case "fra":
          return this.idiomas[id].fra;
        case "esp": default:
          return this.idiomas[id].esp;
      }
    });
  }

  getIdioma(): string{
    return this.idioma;
  }
}