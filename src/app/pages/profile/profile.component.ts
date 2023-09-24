import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { UserElement } from 'src/app/utils/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user!: UserElement;
  constructor(public loginService: LoginService){}

  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe(data=>{
        this.user= data
      })
  }
}
