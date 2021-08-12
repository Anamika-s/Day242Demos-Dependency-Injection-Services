import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 @Output()
 OnClick = new EventEmitter<string>();
 
 
 OnStudentSearch(searchTerm:string): void {  
  console.log(searchTerm);
  this.OnClick.emit(searchTerm);  
}  

  constructor() { }

  ngOnInit(): void {
  }

}
