import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

import { DataService } from '../service/data.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:query', component: RestaurantComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    InfiniteScrollModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
