import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/service/test-service.service';
import { Tests } from 'src/app/utils/types';

@Component({
  selector: 'app-load-test',
  templateUrl: './load-test.component.html',
  styleUrls: ['./load-test.component.scss']
})
export class LoadTestComponent implements OnInit {
  id=0;
  tests:Tests|any=[];
  constructor(route:ActivatedRoute, private testsService: TestService) {
    route.params.subscribe((param=> {
      console.log(param)
      this.id= param['id']
      if(this.id!=0){
        this.testsService.getTestActiveByCategory(this.id).subscribe(data=>{
          console.log(data)
          this.tests=data;
       })
      return;
      }
         this.testsService.getTestActive().subscribe(data=>{
            console.log(data)
            this.tests=data;
        })
    }))
   }
 ngOnInit(): void {
  
 }
}
