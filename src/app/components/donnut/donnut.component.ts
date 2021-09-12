import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donnut',
  templateUrl: './donnut.component.html',
  styles: [
  ]
})
export class DonnutComponent {


  @Input() title:string = "Sin título"

  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
}
