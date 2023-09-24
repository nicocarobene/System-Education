import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DashboardUserComponent } from './pages/user/dashboard-user/dashboard-user.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewTestComponent } from './pages/admin/view-test/view-test.component';
import { AddExamComponent } from './pages/admin/add-exam/add-exam.component';
import { UpdateTestComponent } from './pages/admin/update-test/update-test.component';
import { ViewQuizbytestComponent } from './pages/admin/view-quizbytest/view-quizbytest.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { LoadTestComponent } from './pages/user/load-test/load-test.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartTestComponent } from './pages/user/start-test/start-test.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'singup', component: SingUpComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent , pathMatch: 'full' },
  { path: 'admin',
   component: DashboardComponent,  
   canActivate: [AdminGuard],
    children: [
      {    
        path: '',
        component: WelcomeComponent,
        },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {    
        path: 'category',
        component: ViewCategoryComponent,
      },
      {    
        path: 'addCategory',
        component: AddCategoryComponent,
      },
      {    
        path: 'test',
        component: ViewTestComponent,
      },
      {    
        path: 'addTest',
        component: AddExamComponent,
      },
      {    
        path: 'updateTest/:id',
        component: UpdateTestComponent,
      },
      {    
        path: 'viewQuizTest/:id',
        component: ViewQuizbytestComponent,
      },
      {    
        path: 'addQuiz/:id',
        component: AddQuizComponent,
      },
      {    
        path: 'updateQuiz/:id',
        component: UpdateQuizComponent,
      }
    ]},
  { 
    path: 'user', 
    component: DashboardUserComponent,
    canActivate: [UserGuard],
    children:[
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: "test/:id",
        component: LoadTestComponent,
      },
      {
        path: "instructions/:id",
        component: InstructionsComponent,
      },
      {
        path: "startTest/:id",
        component: StartTestComponent,
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }