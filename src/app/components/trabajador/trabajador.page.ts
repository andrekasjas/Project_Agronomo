import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itrabajador } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.page.html',
  styleUrls: ['./trabajador.page.scss'],
})
export class TrabajadorPage implements OnInit {
  encargados: any;
  id: number;

  constructor(private router:Router, private usersService : UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    {
      this.id = this.activatedRoute.snapshot.params.idoperacion;
      this.usersService.getUsers('encargados',this.id).forEach(res=>{
      this.encargados=(<Itrabajador>res);
    });
  }
  }

  addencargado (idoperacion:number){
    this.router.navigate(['/tabs/tabs/addencargados', idoperacion]);
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
