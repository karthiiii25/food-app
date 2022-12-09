import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth) { }
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () =>{
      localStorage.setItem('token','true');
      alert('YOURE SUCCESSFULLY LOGED IN');
    })
  }
  register(email : string, password :string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=> {
      alert('YOUR ACCOUNT SIGNUP WAS SUCCESSFULL');
    })

  }

}
