import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authSubject = new Subject<boolean>();
  //Nav component to block access to other components
  validateAuth(data:boolean) {
    //passing the data as the next observable
    this.authSubject.next(data);
  }
  //hosturl=environment.userapi;
  
  value?:boolean;
    getAuthStatus(){
    this.authSubject.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );
    return this.value;
  }

  constructor() { }
}
