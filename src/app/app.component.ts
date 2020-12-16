import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-korera';
  windowWidth: number;
  windowHeight: number;
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.windowWidth = event.target.innerWidth;
    this.windowHeight = event.target.innerHeight;
    console.log(this.windowHeight);
    console.log(this.windowHeight);
  }
}
