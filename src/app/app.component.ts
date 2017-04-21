import { GithubService } from './services/github.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GithubService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
