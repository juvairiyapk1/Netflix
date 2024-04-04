import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class LoginService{
    constructor(@Inject(PLATFORM_ID) private plateformId:object ){}
    login(email:string,password:string){
        // here we will call our backend api but as we are not making a real product we will just
        // login user here
        // suppose we have successfully logged in and got a token from the server
        // we will store the token in local storage
        localStorage.setItem("token",Math.random+"");
    }

    // get isLoggedIn():boolean{
    //     if(localStorage.getItem('token')){
    //     return true;
    //     }
    //     return false;
    //   }

    get isLoggedIn():boolean{
        if(isPlatformBrowser(this.plateformId)){
            return localStorage.getItem('token') !== null;
        }
        return false;
    }
}