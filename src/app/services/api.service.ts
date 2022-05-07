import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    usuarios : any;

    constructor(private httpClient:HttpClient){}

    getUsers(text, idx){
        if(idx != null)
            return this.httpClient.get(`https://apiagronomo.herokuapp.com/${text}/${idx}`);
        return this.httpClient.get(`https://apiagronomo.herokuapp.com/${text}`);
    }


    agregar(text, form){
        return this.httpClient.post(`https://apiagronomo.herokuapp.com/${text}`,form);
    }

    deleteUser(text ,idx){
        return this.httpClient.delete(`https://apiagronomo.herokuapp.com/${text}/${idx}`);
    }

    editUser(text ,idx, form){
        return this.httpClient.put(`https://apiagronomo.herokuapp.com/${text}/${idx}`,form);
    }
}

