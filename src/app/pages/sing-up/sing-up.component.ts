import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { User } from './Model/User';

function onlyLettersValidator():ValidatorFn{
  return (control:AbstractControl): { [key: string]: any } | null => {
    const letters = /^[a-zA-Z]+$/;
    if(letters.test(control.value)){
      return null;
    }
    return {
      onlyLetters: true
    }
  }
}



@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
  constructor(private userService: UserService, private snack: MatSnackBar){}
  public formParent: FormGroup= new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required, Validators.minLength(8)]),
    username : new FormControl('', [Validators.required, Validators.minLength(5)]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)]),
    name : new FormControl('', [Validators.required, Validators.minLength(5), onlyLettersValidator()]),
    lastname : new FormControl('', [Validators.required, Validators.minLength(5), onlyLettersValidator()]) 
  })

  public getfieldForm(key:string){
    return this.formParent.get(key)
  }
  
  public user = {
    username: '',
    password: '',
    name: '',
    lastname: '',
    email: '',
    telefono: ''
  }


  formSubmit(){
    if(this.user.username === '' || this.user.username === null){
      this.snack.open("username is invalid", 'Acept', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return; 
    }
    if(this.formParent.invalid){
      this.snack.open("Form is invalid", 'Acept', {
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
