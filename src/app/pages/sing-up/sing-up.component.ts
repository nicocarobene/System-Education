import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { User } from './Model/User';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
  constructor(private userService: UserService, private snack: MatSnackBar){}
 
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.min(8)]);
  username = new FormControl('', [Validators.required, Validators.min(8)]);
  password = new FormControl('', [Validators.required, Validators.min(8)]);
  name = new FormControl('', [Validators.required, Validators.min(8)]);
  lastname = new FormControl('', [Validators.required, Validators.min(8)]);

  public user = {
    username: '',
    password: '',
    name: '',
    lastname: '',
    email: '',
    telefono: ''
  }

  getErrorMessage(control:FormControl) {
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('email')) {
      return 'Enter a valid email address';
    }
    if (control.hasError('min')) {
      return 'Minimum required value is ' + control.getError('min').min;
    }
    return '';
  }

  
  formSubmit(){
    console.log(this.user, this.email)
    if(this.user.username === '' || this.user.username === null){
      this.snack.open("username is required", 'Acept', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return; 
    }

    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data)
        const user= data as User
        Swal.fire(`User ${user.username} created!!👌`,"User was registered", "success")
      },
      () =>{
        this.snack.open("Oppss something was wrong", 'Acept', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        })
      }
    )
  } 

}
