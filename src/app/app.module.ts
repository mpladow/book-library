import { DropdownDirective } from './directives/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksSummaryComponent } from './books-summary/books-summary.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListService } from './services/booklist.service';
import { HamburgerMenuDirective } from './directives/hamburger-menu.directive';
import { FlashingElementDirective } from './directives/flashing-element.directive';
import { CustomDatepickerComponent } from './custom-datepicker/custom-datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookListComponent,
    DropdownDirective,
    BooksSummaryComponent,
    NavbarBottomComponent,
    BookEditComponent,
    HamburgerMenuDirective,
    FlashingElementDirective,
    CustomDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
