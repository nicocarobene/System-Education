import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public username=''; 
  constructor(public loginService: LoginService){}
  public LogOut(){
    this.loginService.logoutUser()
    window.location.href = '/login' 
  }
  
 ngOnInit(): void {
   this.loginService.getCurrentUser().subscribe(user=>{
    this.username=user.username
   })
}
}
