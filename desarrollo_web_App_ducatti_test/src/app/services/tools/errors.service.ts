import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  public generic:string;
  public required:string;
  public numeric:string;
  public betweenDate:string;
  public email:string;
  constructor() {
    this.generic = 'Favor de verificar el tipo de dato introducido';
    this.required = 'Campo requerido';
    this.numeric = 'Solo se aceptan valores numericos';
    this.betweenDate = 'Fecha no es valida';
    this.email = 'Favor de introducir un crreo con el formato correcto';
  }
  between(min: any, max: any) {
    return 'El valor introducido debe de ser entre ' + min + ' y ' + max;
  }

  max(size: any) {
    return 'Se excedió la longitud del campo aceptada: ' + size;
  }

  min(size: any) {
    return 'El campo no cumple la longitud aceptada: ' + size;
  }
}
