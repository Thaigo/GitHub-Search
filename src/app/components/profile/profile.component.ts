import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any[];
  repos: any[];

  constructor(private ghs: GithubService) { 
    this.ghs.getUser().subscribe(user => {
      this.user = user;
    });

     this.ghs.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
