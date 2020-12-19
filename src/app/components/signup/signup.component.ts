import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {
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
      console.log(res);
      this.success = 'Login successful.';
    }, err => {
      console.log(err);
      this.error = 'Sorry, your credentials are incorrect.';
    });
  }
}
