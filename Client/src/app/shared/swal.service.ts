import { Injectable } from '@angular/core';
import Swal from  'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class Sweetalert2Service {


  constructor( ) { }

  top() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 2000,

    })
  }
    show( text) {
      Swal.fire({
       icon: 'warning',
       position: 'center',
       title: 'Oops...',
       text: text,



     })

     };
     logaut() {
      Swal.fire({
       position: 'center',
       icon: 'success',
      title: 'You have been successfully logged out',
     })

     };

}

