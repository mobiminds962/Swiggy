import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

import config from '../../config/const';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Welcome To Swiggy';
  restaurantArr: any[] = [];
  restaurants: any[] = [];
  inputValue: string = '';
  //private sub: any;
  constructor(private dataService: DataService, private router: Router) {

  }

  public ngOnInit() {
    this.dataService.get(config.baseurl).then(response => {
      console.log(response);
      this.restaurants = response;

    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  onSearch() {
    if(this.inputValue && this.inputValue !== '') {
      this.router.navigate(['/search', this.inputValue]);
    }
  }

  clearSearch() {
    this.inputValue = '';
    this.restaurantArr = [];
  }

  onScroll() {
    
  }

  filterValues() {
  	 console.log(this.inputValue);
     if(this.inputValue && this.inputValue !== '') {
       this.restaurantArr = this.restaurants.filter(restaurant => (restaurant.name.toLowerCase().includes(this.inputValue) || restaurant.cuisine.includes(this.inputValue)));
     }else {
       this.restaurantArr = [];
     } 
  }
}
