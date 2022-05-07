import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public migrupo1: FormGroup;
  cliente :any;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private authSvc: AuthService, private router: Router) {
    this.migrupo1 = this.crearMiFormulario();
  }

  ngOnInit() {}

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('No cumple las Condiciones Necesarias', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['tabs']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
  get email() { return this.migrupo1.get('email'); }
  get password() { return this.migrupo1.get('password'); }

  crearMiFormulario() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
     
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
      this.onRegister(objetoEnviar.state.infoCliente.email, objetoEnviar.state.infoCliente.password);
    }
  }
}
