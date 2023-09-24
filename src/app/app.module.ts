import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './service/interceptor.service';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DashboardUserComponent } from './pages/user/dashboard-user/dashboard-user.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewTestComponent } from './pages/admin/view-test/view-test.component';
import { AddExamComponent } from './pages/admin/add-exam/add-exam.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateTestComponent } from './pages/admin/update-test/update-test.component';
import { ViewQuizbytestComponent } from './pages/admin/view-quizbytest/view-quizbytest.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { SidebarComponentUser } from './pages/user/sidebar/sidebar.component';
import { LoadTestComponent } from './pages/user/load-test/load-test.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartTestComponent } from './pages/user/start-test/start-test.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingUpComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DashboardUserComponent,
    SidebarComponent,
    WelcomeComponent,
    ProfileComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    ViewTestComponent,
    AddExamComponent,
    UpdateTestComponent,
    ViewQuizbytestComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    SidebarComponentUser,
    LoadTestComponent,
    InstructionsComponent,
    StartTestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
