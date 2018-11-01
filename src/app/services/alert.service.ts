import { Injectable } from '@angular/core';
import swal, { SweetAlertType } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  successAlert(titulo: string, message: string) {
    this.basicAlertBuilder('success', titulo, message);
  }

  erroAlert(titulo: string, message: string): void {
    this.basicAlertBuilder('error', titulo, message);
  }

  basicAlertBuilder(type: SweetAlertType, titulo: string, message: string) {
    swal({
      type: type,
      title: titulo,
      text: message
    });
  }
}
