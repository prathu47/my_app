import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {

  //counter property
  counterValue=1;
  countLessThenOne=true;
  
  @Output() countEmmitter =new EventEmitter(); //4

  PostValue(){
    this.countEmmitter.emit(this.counterValue);//4
  }

  //increment and decrement 

  //Quantity -> 10
  decrement(){
    if(this.counterValue==1)
    {
      this.countLessThenOne=false;
    }
    else{
      this.countLessThenOne=true;
      this.counterValue--;
    }
    this.PostValue();
  }

  increment(){
    this.counterValue++;
    this.countLessThenOne=true;
    this.PostValue();
  }



  constructor() { }

  ngOnInit(): void {
  }

}
