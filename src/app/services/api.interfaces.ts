export interface Ifinca {
    "fin_id":number ,
    "fin_nom": string,
    "fin_are": string,
    "fin_des":string,
    "fin_adm_id": string 
}
export interface Ilote {
    "lot_id":number ,
    "lot_are": string,
    "lot_des":string,
    "lot_fin_id": number 
}
export interface Iadministrador{
    "adm_ema":string
}
export interface Itipocultivo{
    "tip_id" : number,
    "tip_nom" : string
} 
export interface Icultivo{
    "cul_id" : number,
    "cul_nom" : string,
    "cul_ini" : Date,
    "cul_fin" : Date,
    "cul_cant" : number,
    "cul_lot_id" : number,
    "cul_tip_id" : number,
    "tip_nom" : string 
}
export interface Ioperacion{
    "ope_id" : number,
    "ope_nom" : string,
    "ope_tie" : string,
    "ope_fec" : Date,
    "ope_fin" : Date,
    "ope_cul_id" : number
}
export interface Itrabajador{
    "tra_ced" : number,
    "tra_nom" : string,
    "tra_tel" : number
}
export interface Iproducto{
    "pro_id" : number,
    "pro_nom" : string,
    "pro_pre" : string
}
export interface Ifungicida{
    "id" : number,
    "fun_niv" : number,
    "fun_pro_id" : number
}
export interface Ifertilizante{
    "id" : number,
    "fer_nut" : number,
    "fer_pro_id" : number
}
export interface Iinsumo{
    "ins_id" : number,
    "ins_nom" : string,
    "ins_fecv" : Date,
    "ins_pro_id" : number
}
export interface Iproveedor{
    "pro_ced" : number,
    "pro_nom" : string,
    "pro_raz" : string,
    "pro_ema" : string
}
export interface Ifactura{
    "fac_id" : number,
    "fac_fec" : string,
    "fac_tip" : string,
    "fac_val" : number,
    "fac_cant" : number,
    "fac_ins_id" : number,
    "fac_pro_ced" : number
}