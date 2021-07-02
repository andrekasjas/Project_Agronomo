import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iinsumo } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.page.html',
  styleUrls: ['./insumo.page.scss'],
})
export class InsumoPage implements OnInit {
  insumos: any;
  id: number;

  constructor(private usersService:UsersService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    {
      this.id = this.activatedRoute.snapshot.params.idoperacion;
      this.usersService.getUsers('cultivos',this.id).forEach(res=>{
      this.insumos=(<Iinsumo>res);
    });
  }
  }

  factura (idinsumo:number){
    this.router.navigate(['/tabs/tabs/factura', idinsumo]);
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
