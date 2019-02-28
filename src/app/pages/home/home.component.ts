import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdiomaService } from 'src/app/service/idioma.service';
import { DateValidator } from 'src/app/validator/dateValidator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: string;
  form: FormGroup;
  origenes: string[];
  destinos: string[];
  success: boolean;

  constructor(private fb: FormBuilder, private idioma: IdiomaService) { }

  ngOnInit() {
    this.today();
    this.crearForm();

    this.success = false;

    this.origenes = [
      "AGP Málaga Centro",
      "AGP Málaga Victoria Kent"
    ];
    this.destinos = [
      "Ronda, Hotel Ronda Moments",
      "Ronda, Hotel Molino del Arco",
      "Ronda, Hotel Maestranza",
      "Ronda, Hotel Polo"
    ];
  }

  info(id: string){
    return this.idioma.getData(id);
  }

  crearForm(){
    this.form = this.fb.group({
      origen: new FormControl("", [Validators.required]),
      destino: new FormControl("", [Validators.required]),
      fecha: new FormControl("", [Validators.required, DateValidator.dateValidator])
    });
  }

  today(){
    var today = new Date();
    var dia: string = ""+today.getDate();
    var mes: string = ""+(today.getMonth() + 1);
    var anio: string = ""+today.getFullYear();

    if (Number(dia) < 10) {
      dia = '0' + dia;
    }

    if (Number(mes) < 10) {
      mes = '0' + mes;
    }
    this.date = anio+"-"+mes+"-"+dia;
  }

  onSubmit(){
    this.success = true;
    this.crearForm();
  }

  cerrarMensaje(){
    this.success = false;
  }

  get origen(){
    return this.form.get("origen");
  }
  get destino(){
    return this.form.get("destino");
  }
  get fecha(){
    return this.form.get("fecha");
  }
}
