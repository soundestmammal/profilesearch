import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username:string;
	private client_id = '066e8a94565c372765e1';
	private client_secret = '9c28b3775023d9cc2153faf8a5173dc12b5436d2';

	constructor(private _http:Http){
		console.log('Github Service Ready...');
		this.username = 'robertchecco';

	}

	getUser() {
		return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
	}
	getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUser(username:string){
        this.username = username;
    }
}