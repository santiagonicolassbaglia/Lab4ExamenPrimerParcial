import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
 
import { WelcomeComponent} from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';
                                                                    




const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
