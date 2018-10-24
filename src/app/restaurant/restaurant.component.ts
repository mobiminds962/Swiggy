import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';

import config from '../../config/const';

@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, OnDestroy {
  title = 'Restaurants';
  restaurantArr: any[] = [];
  query: string = '';
  private sub: any;
  categories: any[] = [];
  category: string = '';
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.categories = config.sortingArr;
  }

  showRestaurants(query) {
    this.dataService.get(config.baseurl).then(response => {
      console.log(response);
      if(query && query !== '') {
        this.query = query;
        this.restaurantArr = response.filter(restaurant => (restaurant.name.toLowerCase().includes(query) || restaurant.cuisine.includes(query)));
      }
    }, error => {
      console.log(error);
    });
  }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.showRestaurants(params['query']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
