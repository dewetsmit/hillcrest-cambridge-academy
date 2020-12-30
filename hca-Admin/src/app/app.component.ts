import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hca-Admin';
  email = '';
  password = '';
  authState: any;
  loading: boolean;
  constructor(public authService: AuthService, private router: Router) {
      this.authService.user.subscribe(user=>{
        if(user){
          this.router.navigateByUrl('/dashboard');
        }else{
          this.router.navigateByUrl('');
        }
      });
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}
