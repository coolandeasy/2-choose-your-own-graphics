import { Component, OnInit } from '@angular/core';
import {configuration} from "src/app/configuration/configuration";
import {tasks} from "src/app/configuration/tasks";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {
  expectedResult: number = 0;
  maxPoints: number = 30;
  thresholdDifference: number = 0.15;
  constructor() { }

  ngOnInit(): void {
    this.expectedResult = configuration.reduce((partialResult, config, currentIndex) => {
      const aPoints = tasks[currentIndex].A.subTasks
        .map((st, index) => (config.A.subTasks as any)[index + 1] ? st.xp : 0)
        .reduce((pr, nv) => pr + nv);
      const bPoints = tasks[currentIndex].B.subTasks
        .map((st, index) => (config.B.subTasks as any)[index + 1] ? st.xp : 0)
        .reduce((pr, nv) => pr + nv);
      // console.log('aPoints', aPoints);
      // console.log('bPoints', bPoints);
      if (aPoints > bPoints) {
        return partialResult + aPoints + (bPoints / 4);
      } else {
        return partialResult + bPoints + (aPoints / 4);
      }
    }, 0);
  }

}
