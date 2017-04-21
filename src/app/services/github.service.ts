import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
  private username: string;
  private client_id = '9b4ee447d040ad54959d';
  private client_secret = 'f2d81717e34044355b00859c26fcfdb650849e21';

  constructor(private http: Http) { 
    console.log('github service ready');
    this.username = 'Thaigo';
  }

  getUser() {
    return this.http.get('http://api.github.com/users' + this.username 
                                                       + '?client_id=' + this.client_id 
                                                       + '&client_secret=' + this.client_secret ).map(res => res.json());
  }

}
