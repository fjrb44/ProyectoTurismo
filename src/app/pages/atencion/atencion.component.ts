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
  exito: string;

  constructor(private idioma: IdiomaService, private fb: FormBuilder) { }

  ngOnInit() {
    this.crearForm();
  }

  crearForm(){
    this.form = this.fb.group({
      nombre: new FormControl("", [Validators.required]),
      correo: new FormControl("", [Validators.required]),
      telefono: new FormControl(),
      mensaje: new FormControl("", [Validators.required])
    });
  }

  onSubmit(){
    this.crearForm();
    this.exito = this.info('hola');
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
