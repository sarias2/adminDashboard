import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1:string[] = ['La 14', 'Amazon', 'Alkosto'];
  public data1 = [
    [240, 320, 14]
  ];

}
