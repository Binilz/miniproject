import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectpageComponent } from './components/projectpage/projectpage.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes = [
  {path: "", component: SigninComponent},
  {path: "register", component: SignupComponent},
  {path: "project", component: ProjectpageComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
