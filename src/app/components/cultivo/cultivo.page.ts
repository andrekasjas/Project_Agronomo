import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icultivo } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.page.html',
  styleUrls: ['./cultivo.page.scss'],
})
export class CultivoPage implements OnInit {
  cultivos: any;
  tipo: any;
  id: number;

  constructor(private router:Router, private usersService:UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    {
      this.id = this.activatedRoute.snapshot.params.idlote;
      this.usersService.getUsers('cultivos',this.id).forEach(res=>{
      this.cultivos=(<Icultivo>res);
    });
  }
  }

  operaciones (idcultivo:number){
    this.router.navigate(['/tabs/tabs/operacion', idcultivo]);
  }

  addcultivo (idlote:number){
    this.router.navigate(['/tabs/tabs/addcultivo', idlote]);
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
