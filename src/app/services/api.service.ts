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
            return this.httpClient.get(`http://localhost:3000/${text}/${idx}`);
        return this.httpClient.get(`http://localhost:3000/${text}`);
    }


    agregar(text, form){
        return this.httpClient.post(`http://localhost:3000/${text}`,form);
    }

    deleteUser(text ,idx){
        return this.httpClient.delete(`http://localhost:3000/${text}/${idx}`);
    }

    editUser(text ,idx, form){
        return this.httpClient.put(`http://localhost:3000/${text}/${idx}`,form);
    }
}

