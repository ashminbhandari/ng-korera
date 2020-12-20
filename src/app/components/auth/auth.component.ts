import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/resources']);
    }
  }

  error: string;

  success: string;

  model = new User('Username', 'Password');

  ngOnInit(): void {
    this.error = '';
    this.success = '';
  }

  onSignUp(): void {
    this.error = '';
    this.success = '';
    this.authService.register(this.model).subscribe(res => {
      console.log(res);
      this.success = 'Your account has been successfully created.';
    }, err => {
      console.log(err);
      this.error = 'Sorry, the account could not be created.';
    });
  }

  onLogin(): void {
    this.error = '';
    this.success = '';
    this.authService.login(this.model).subscribe(res => {
      this.success = 'Login successful.';
      this.router.navigate(['/resources']);
    }, err => {
      console.log(err);
      this.error = 'Sorry, your credentials are incorrect.';
    });
  }
}
