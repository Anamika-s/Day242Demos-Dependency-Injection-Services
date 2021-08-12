import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[StudentService , HelloService]
})

export class SecondComponent implements OnInit {
  msg :string ="";
  students :  any[];  
  constructor(private _studentService : StudentService , private helloService : HelloService) { }
   
  CallHello()
  {
    this.msg = this.helloService.GetMessage();
  }
  ngOnInit(): void {
    this.students = this._studentService.GetStudents();
  }

}
