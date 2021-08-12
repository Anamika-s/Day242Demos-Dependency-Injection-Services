import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { SearchComponent } from './search/search.component';
import { SecondComponent } from './second/second.component';
import { StudentService}   from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    MainSearchComponent,
    SearchComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
