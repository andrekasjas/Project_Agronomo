import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifinca } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-buscarfinca',
  templateUrl: './buscarfinca.page.html',
  styleUrls: ['./buscarfinca.page.scss'],
})
export class BuscarfincaPage implements OnInit {

  text:string;
  productsArr: Ifinca[];
  fincas : any;
  

  constructor(private authService : AuthService, private usersService:UsersService, private rutaActiva:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.text= this.rutaActiva.snapshot.params.text;
    this.productsArr= this.buscar(this.text);
  }

  buscar(text){
    let resc: Ifinca[]=[];
    text = text.toLowerCase();
    this.authService.user$.subscribe(req=>
    this.usersService.getUsers('fincas',req.uid).forEach(res=>{
        this.fincas=(<Ifinca>res);
        for(const finca of this.fincas){
            const name = finca.fin_nom.toLowerCase();
            if(name.indexOf(text) >= 0){
              resc.push(finca)
            }
        }
    }));
    return resc; 
  }

  lotes (idfinca:number){
    this.router.navigate(['/tabs/tabs/lote', idfinca]);
  }

  update (idfinca:number){
    this.router.navigate(['/tabs/tabs/editfinca', idfinca]);
  }
  eliminar(idx:number){
      this.usersService.deleteUser('finca',idx).forEach(res=>{
      this.fincas=(<Ifinca>res);
    });
  }


}
