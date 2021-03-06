import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/providers/book.service';

@Component({
  selector: 'gb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
 
})

export class BookComponent implements OnInit {
  @Input()
  book: Book= new Book();

  @Output()
  favoriteEvent: EventEmitter<Book> = new EventEmitter();

  constructor() { 
    
  }
  
    

  ngOnInit(): void {}
    favorite(): void {
      this.favoriteEvent.emit(this.book);
      
  }

}
