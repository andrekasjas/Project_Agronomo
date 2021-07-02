import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ioperacion } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.page.html',
  styleUrls: ['./operacion.page.scss'],
})
export class OperacionPage implements OnInit {
  id: number;
  operaciones : any;

  constructor(private router: Router, private usersService:UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    {
      this.id = this.activatedRoute.snapshot.params.idcultivo;
      this.usersService.getUsers('operaciones',this.id).forEach(res=>{
      this.operaciones=(<Ioperacion>res);
    });
  }
  }

  encargados (idoperacion:number){
    this.router.navigate(['/tabs/tabs/trabajador', idoperacion]);
  }
  insumoso (idoperacion:number){
    this.router.navigate(['/tabs/tabs/insumo', idoperacion]);
  }

  addoperacion (idcultivo:number){
    this.router.navigate(['/tabs/tabs/addoperacion', idcultivo]);
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
