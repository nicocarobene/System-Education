import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserLogin } from 'src/app/utils/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor( private snack: MatSnackBar, private loginService: LoginService, private route: Router){}
  form = new FormGroup({
    username: new FormControl("", Validators.minLength(2),),
    password: new FormControl("", Validators.minLength(2)),
  });
  getErrorMessage(control:FormGroup) {
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('minlength')) {
      return 'Minimum required value is ' + control.getError('minlength').requiredLength;
    }
    return '';
  }

  onSubmit() {
    if(this.form.invalid){
      this.snack.open("username and password are required", 'Acept', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      }) 
    }else{
      const user: UserLogin={
        usernameOrEmail: this.form.value.username ?? '',
        password: this.form.value.password ?? ''
      }

      this.loginService.generateToken(user).subscribe(
        (response) => {
          this.form.reset();
          this.snack.open('Login Successful', 'OK', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
          this.loginService.loginUser(response.accessToken)
          this.loginService.getCurrentUser().subscribe((user:any)=>{
            console.log(user)
            if(user.authorities[0].authority === 'ADMIN'){
              this.loginService.setUser(user.authorities[0].authority)
              this.loginService.loginStatusSubject.next(true)
              return this.route.navigate(["/admin"]);
            }else if(user.authorities[0].authority === 'USER'){
              this.loginService.setUser(user.authorities[0].authority)
              this.loginService.loginStatusSubject.next(true)
              return this.route.navigate(["/user"]);
            }
            return this.loginService.logoutUser()
          }
          )
        },
        (error) => {
          console.error('Error generating token:', error);
          this.snack.open('Error generating token', 'OK', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        }
      )
    }
  }
}
