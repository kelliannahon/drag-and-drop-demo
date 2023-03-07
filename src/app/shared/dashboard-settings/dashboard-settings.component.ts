import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

export class Widget {
  name: string;
  token: string;
  id: number;
  size: 1 | 2 | 3;
}

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.css'],
})
export class DashboardSettingsComponent implements OnInit {

  @Input()
  rowSumMax: number = 3
  
  @Input()
  widgets: Widget[] = [
    {
      name: 'Tonnage',
      token: 'TONNAGE',
      id: 1,
      size: 2,
    },
    {
      name: 'Valo',
      token: 'VALO',
      id: 2,
      size: 1,
    },
    {
      name: 'Desclassement',
      token: 'VALO',
      id: 3,
      size: 1,
    },
    {
      name: 'Faits Marquant',
      token: 'VALO',
      id: 4,
      size: 1,
    },
    {
      name: 'Comparaison',
      token: 'VALO',
      id: 5,
      size: 3,
    },
    {
      name: 'Financier',
      token: 'VALO',
      id: 6,
      size: 2,
    },
  ];

  display: Widget[][] = [[]];

  widgetsName: string[] = [];
  constructor() {}

  ngOnInit() {
    this.widgetsName = this.widgets.map((w) => w.name);
    this.calculateDisplay();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
    this.cleanDisplay();
    this.calculateDisplay();
  }

  cleanDisplay() {
    this.display = [[]];
  }

  calculateDisplay() {
    let rowIndex = 0;
    let rowSum = 0;
    this.widgets.forEach((w) => {
      console.log(w);
      console.log(rowIndex + ' /// ' + rowSum);
      rowSum += w.size;
      if (rowSum > this.rowSumMax) {
        rowIndex += 1;
      }
      if (this.display[rowIndex] == null) {
        console.log(true);
        this.display[rowIndex] = [w];
        rowSum = w.size;
      } else {
        console.log(false);
        this.display[rowIndex].push(w);
      }
    });
    console.log(this.display);
  }
}
