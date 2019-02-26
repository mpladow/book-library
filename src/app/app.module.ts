import { DropdownDirective } from './directives/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
    FlashingElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
