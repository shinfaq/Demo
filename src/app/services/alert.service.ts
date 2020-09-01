import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  showErrorAlert(message){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      timer: 2000
    })
  }
  showSuccessAlert(message){
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      timer: 2000
    })
  }
}
