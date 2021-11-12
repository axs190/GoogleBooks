import { Injectable } from '@angular/core';
//import { resourceLimits } from 'worker_threads';


import { Book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  

    getFavorite(): Book {
      return new Book();
    }

    getSearchResults(term: String): Array<Book> {
      let results: Book[]=[];
      for(let i=0; i<10;i++)
      {
        let result: Book = new Book();
        result.title = 'Search Result ' + i;
        results.push(result);
      }
      return results;
    }

    getBooksToRead(): Array<Book>{
      let results: Book[]=[];
      for(let i=0; i<3;i++)
      {
        let result: Book = new Book();
        result.title = 'To Read ' + i;
        results.push(result);
      }
      return results;
    }
}
