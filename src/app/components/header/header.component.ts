import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  headerTitle: string;
  @Input()
  iconName: string;
  user: User;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => this.user = user);
  }
}
