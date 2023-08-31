import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { LoginService } from "./login.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
     
    constructor(private loginService: LoginService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        const token= this.loginService.getToken();
        if(token !== null && token !== undefined && token.length > 0.0){
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(cloned);
        }else{
            return next.handle(req);
        }
    }
}

export const authInterceptorProviders =[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
]