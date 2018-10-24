import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
	private loading: any;
  	isShowProgress: boolean = false;
  	products: any[] = [];
	categories: any[] = [];
	validationData: any = {};
	selectedQuery: any = {};

	constructor(private http: HttpClient) {
	}

	returnArgumentObj(arr, key, value) {
		return arr.find(x => x.$[key] === value);
	}

	get(url: string='', isShow: boolean = true): Promise<any> {
		if(isShow) {
			this.isShowProgress = true;
		}
		return new Promise((resolve, reject) => {
			this.http.get(url)
	           .toPromise()
	           .then((response) => {
					this.isShowProgress = false;
					//console.log(response);
					resolve(response);
				})
	           .catch((error) => {
	           		this.isShowProgress = false;
					console.log("ERROR");
					//console.log(error);
	           		reject(error);
	           	});
        });
	}

	post(data: any, url: string='', isShow: boolean = true): Promise<any> {
		if(isShow) {
			this.isShowProgress = true;
		}
		return new Promise((resolve, reject) => {
			this.http.post(url, data)
				.subscribe((response) => {
					this.isShowProgress = false;
	           		//console.log(formattedResponse);
	           		resolve(response);
				}, error => {
	           		this.isShowProgress = false;
					console.log("ERROR");
					//console.log(error);
	           		reject(error);
	           	});
		});
	}

	put(data: any, url: string=''): Promise<any> {
		this.isShowProgress = true;
		return this.http.put(url, JSON.stringify(data))
				.toPromise()
				.then((response: any) => {
					this.isShowProgress = false;
					response.json()
				})
				.catch(this.handleError);
	}

	delete(url: string=''): Promise<any> {
		this.isShowProgress = true;
		return this.http.delete(url)
				.toPromise()
				.then(() => null)
				.catch(this.handleError);
	}

	handleError = (error: any) => {
		this.isShowProgress = false;
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}