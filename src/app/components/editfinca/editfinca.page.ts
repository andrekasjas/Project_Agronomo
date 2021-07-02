import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Ifinca } from 'src/app/services/api.interfaces';

@Component({
  selector: 'app-editfinca',
  templateUrl: './editfinca.page.html',
  styleUrls: ['./editfinca.page.scss'],
})
export class EditfincaPage implements OnInit {
  constructor(private router:Router, private usersService:UsersService ,private rutaActiva:ActivatedRoute) {}

  fincas: any;
  ngOnInit() {
    {
      const id = this.rutaActiva.snapshot.params.idfinca;
      this.usersService.getUsers('finca',id).forEach(res=>{
        this.fincas=(<Ifinca>res)
      })
    }
  }

  edit(fin_nom,fin_are,fin_des){
    const id = this.rutaActiva.snapshot.params.idfinca;
    let finca={
      fin_nom:fin_nom.value, 
      fin_are:fin_are.value,
      fin_des:fin_des.value
    }
    this.usersService.editUser('finca',id,finca).subscribe(res =>console.log(res));
    this.router.navigate(['/tabs/tabs/finca']);
  }
}
