import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/api.service'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { Ifinca } from 'src/app/services/api.interfaces';

@Component({
  selector: 'app-finca',
  templateUrl: './finca.page.html',
  styleUrls: ['./finca.page.scss'],
})
export class FincaPage implements OnInit {
  fincas: any;
  administrador: any;

  constructor( private authService: AuthService, private usersService: UsersService, private router:Router) { }
  
  user = this.authService.user$;
  ngOnInit() {
    {
      this.authService.user$.subscribe(req => 
        {
          this.administrador = req.uid
          this.usersService.getUsers('fincas',this.administrador).forEach(res=>{
        this.fincas=(<Ifinca>res)
      })})
    }
  }

  lotes (idfinca:number){
    this.router.navigate(['/tabs/tabs/lote', idfinca]);
  }

  addfinca (){
    this.router.navigate(['/tabs/tabs/addfinca', this.administrador]);
  }

  update (idfinca:number){
    this.router.navigate(['/tabs/tabs/editfinca', idfinca]);
  }
  buscar (event){
    this.router.navigate(['/tabs/tabs/buscarfinca', event.detail.value]);
  }

  eliminar(idx:number){
      this.usersService.deleteUser('finca',idx).forEach(res=>{
      this.fincas=(<Ifinca>res);
    });
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
