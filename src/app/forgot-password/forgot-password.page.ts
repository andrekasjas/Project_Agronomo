import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {

  public migrupo1: FormGroup;
  cliente : any;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private authSvc: AuthService, private router: Router) {
    this.migrupo1 = this.crearMiFormulario();
  }

  async onResetPassword(email) {
    try {
      await this.authSvc.resetPassword(email);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error->', error);
    }
  }
  get email() { return this.migrupo1.get('email'); }

  crearMiFormulario() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
    });
  }
 
  onResetForm(): void {
    this.migrupo1.reset();
  }

  salvarFormulario(): void {
    this.cliente=this.migrupo1.value
    if (this.migrupo1.valid) {

      let objetoEnviar: NavigationExtras = {
        state: {
          infoCliente: this.cliente
        }
      };
      this.onResetPassword(objetoEnviar.state.infoCliente.email);
    }
  }
}
