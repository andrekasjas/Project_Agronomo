import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Ilote, Itipocultivo } from 'src/app/services/api.interfaces';
import { UsersService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addcultivo',
  templateUrl: './addcultivo.page.html',
  styleUrls: ['./addcultivo.page.scss'],
})
export class AddcultivoPage implements OnInit {

  lotes: any;
  tiposcultivos: any;
  public migrupo1: FormGroup;
  cliente :any;
  public id : string; 
  otro = {
    tip_nom: "otro"
  };

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private usersService: UsersService) { 
    this.migrupo1 = this.crearMiFormulario();
    this.id = this.activatedRoute.snapshot.params.idlote;
  }

  ngOnInit() {
    {
      this.usersService.getUsers('lote',this.id).forEach(res=>{
      this.lotes=(<Ilote>res);
    });
    this.usersService.getUsers('tiposcultivo',null).forEach(res=>{
      this.tiposcultivos=(<Itipocultivo>res);
    });
  }
  }

  addcultivo(nombre, inicio, fin, cantidad, tip){
    let cultivo = {
      cul_nom : nombre.value,
      cul_ini : inicio.value,
      cul_fin : fin.value,
      cul_cant : cantidad.value,
      cul_lot_id : this.id,
      cul_tip_id : tip
    }
    this.usersService.agregar('cultivo',cultivo).subscribe(res =>console.log(res));
    this.router.navigate(['/tabs/tabs/cultivo', this.id]);
  }

  addcultivootro(nombre, inicio, fin, cantidad, tip){
    let cultivosactu:any;
    let tipo = {
      tip_nom : tip.value
    }
    for(const tipo of this.tiposcultivos){
      const name = tipo.tip_nom;
      if(name == tip.value){
        return this.addcultivo(nombre,inicio,fin,cantidad,tipo.tip_id);
      }
    }
    this.usersService.agregar('tipocultivo',tipo).subscribe(res =>console.log(res));
    setTimeout(() => {
      this.usersService.getUsers('tiposcultivo',null).forEach(res=>{
        cultivosactu=(<Itipocultivo>res);
          for(const tipoo of cultivosactu){
              const name = tipoo.tip_nom;
              if(name == tip.value){
                this.addcultivo(nombre,inicio,fin,cantidad,tipoo.tip_id) 
              }
          }
        });
  }, 1500);
    
  }

  get nombre() { return this.migrupo1.get('nombre'); }
  get inicio() { return this.migrupo1.get('inicio');}
  get fin() { return this.migrupo1.get('fin'); }
  get cantidad() { return this.migrupo1.get('cantidad'); }
  get tip() { return this.migrupo1.get('tip'); }

  crearMiFormulario() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      inicio: new FormControl('', [Validators.required]),
      fin: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required]),
      tip: new FormControl('', [Validators.required]),
    });
  }
  onResetForm(): void {
    this.migrupo1.reset();
  }  

}
