import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styles: [
  ]
})
export class AdderComponent implements OnInit{
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value') progreso:number = 40;
  @Input() btnClass:string = 'btn-primary';
  @Output('value') outputValue:EventEmitter<number> = new EventEmitter();

  changeValue(value:number){
    if (this.progreso >= 100 && value >= 0) {
      this.outputValue.emit(100)
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && value < 0) {
      this.outputValue.emit(0)
      return this.progreso = 0;
    }
    
    this.outputValue.emit(this.progreso);
    return this.progreso = this.progreso + value;
  }

  onChange(value:number){
    if (value >= 100) {
      this.progreso = 100;
    } else if(value <= 0 ){
      this.progreso = 0;
    } else{
      this.progreso = value;
    }
    this.outputValue.emit(this.progreso);
  }
}
