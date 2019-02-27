import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AtencionComponent implements OnInit {
  form: FormGroup;
  exito: boolean;

  constructor(private idioma: IdiomaService, private fb: FormBuilder) { }

  ngOnInit() {
    this.exito = false;
    this.crearForm();
  }

  crearForm(){
    this.form = this.fb.group({
      nombre: new FormControl("", [Validators.required]),
      correo: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      telefono: new FormControl("", [Validators.pattern("[0-9]{9}")]),
      mensaje: new FormControl("", [Validators.required])
    });
  }

  cerrarMensaje(){
    this.exito = false;
  }
  onSubmit(){
    this.crearForm();
    this.exito = true;
  }

  info(id: string){
    return this.idioma.getData(id);
  }

  get nombre(){
    return this.form.get("nombre");
  }
  get correo(){
    return this.form.get("correo");
  }
  get telefono(){
    return this.form.get("telefono");
  }
  get mensaje(){
    return this.form.get("mensaje");
  }
}
