import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dnd-test',
  templateUrl: './dnd-test.component.html',
  styleUrls: ['./dnd-test.component.scss']
})
export class DndTestComponent implements OnInit {

  pictureList: string[];

  constructor() { }

  ngOnInit() {
    this.pictureList = Array.from({length: 20}).map((_, i) => `http://placekitten.com/${(i * 5)%100 + 300}/${(i * 5)%100 + 200}`);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pictureList, event.previousIndex, event.currentIndex);
  }
}
