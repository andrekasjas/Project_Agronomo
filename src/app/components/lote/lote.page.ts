import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ilote } from 'src/app/services/api.interfaces';
import { UsersService } from '../../services/api.service'

@Component({
  selector: 'app-lote',
  templateUrl: './lote.page.html',
  styleUrls: ['./lote.page.scss'],
})
export class LotePage implements OnInit {
  lotes: any;
  id: number;

  constructor(private router:Router, private usersService:UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    {
      this.id = this.activatedRoute.snapshot.params.idfinca;
      this.usersService.getUsers('lotes',this.id).forEach(res=>{
      this.lotes=(<Ilote>res);
    });
  }
  }

  addlote (idfinca:number){
    this.router.navigate(['/tabs/tabs/addlote', idfinca]);
  }

  cultivos (idlote:number){
    this.router.navigate(['/tabs/tabs/cultivo', idlote]);
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
