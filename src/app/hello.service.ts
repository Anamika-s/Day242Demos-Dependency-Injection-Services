import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }
   GetMessage() : string{
     return "Hello";
   }  
}
