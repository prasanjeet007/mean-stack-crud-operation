import { Component, DoCheck, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activeSlideIndex = 0;
  imgArray = [{imgSrc: 'assets/images/1.png', description: 'Mean Stack'},
  {imgSrc: 'assets/images/2.png', description: 'Mean Stack'},
  {imgSrc: 'assets/images/3.png', description: 'Mean Stack'},
  {imgSrc: 'assets/images/4.jpg', description: 'Mean Stack'}];
  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('NgOnInit Called');
  }
}
