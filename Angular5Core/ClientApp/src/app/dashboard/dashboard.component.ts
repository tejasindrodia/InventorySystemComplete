import { Component, OnInit, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@NgModule({
  declarations: [ 
    NavMenuComponent, 
  ] 
})

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
