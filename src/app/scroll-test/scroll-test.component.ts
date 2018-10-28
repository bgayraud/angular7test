import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scroll-test',
  templateUrl: './scroll-test.component.html',
  styleUrls: ['./scroll-test.component.scss']
})
export class ScrollTestComponent implements OnInit {

  pictureList: string[];
  
  constructor() { }

  ngOnInit() {
    this.pictureList = Array.from({length: 100}).map((_, i) => `http://placekitten.com/400/${i + 200}`);
  }

  initPictureList() {
    
  }

}
