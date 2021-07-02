import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/api.service'
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  constructor(private usersService:UsersService, private authSvc: AuthService, private router: Router) {}
  
  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['tabs']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }

  async logingoogle(){
    try {
      const user = await this.authSvc.loginwithgoogle();
      if (user) {
        let admin = {
          adm_id : user.uid,
          adm_ema : user.email
        }
        this.usersService.agregar('administrador',admin).subscribe(res =>console.log(res));        
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(true);
        console.log('Usuario ->', user);
      }
    } catch (error) {
      console.log('No Cumple con las Condiciones ', error);
    }
  }

  async loginfacebook(){
    try {
      const user = await this.authSvc.loginwithfacebook();
      if (user) {
        let admin = {
          adm_id : user.uid,
          adm_ema : user.email
        }
        this.usersService.agregar('administrador',admin).subscribe(res =>console.log(res));
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(true);
        console.log('Usuario ->', user);
      }
    } catch (error) {
      console.log('No Cumple con las Condiciones ', error);
    }
  }
}
