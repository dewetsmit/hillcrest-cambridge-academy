import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.default.User>;
  authState: any;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private toaster: Toaster) {
    this.user = firebaseAuth.authState;
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigateByUrl('/dashboard'))
      .catch(err => this.toaster.open({text:err.message, type:'danger'}));
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}