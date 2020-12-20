import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if (user && user.token) {
        this.authService.fetchProfileInfo();
      }
    });
  }
}
