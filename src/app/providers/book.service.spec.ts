import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

import { Book } from '../models/book';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getFavorite', () => {
    it('returns a defined book', () => {
      //const service: BookService = TestBed.inject(BookService);
      expect(service.getFavorite()).toBeDefined();
    }); 
  });
  describe('getSearchResults', () =>{
   
    it("Finds that 10 Book Objects returned", () =>{
      let results: Book[] = service.getSearchResults('johnny');
      expect(results).toBeTruthy()
      expect(results.length).toBe(10);
    });
    it('has a title for each book of "Search Result #"', () =>{
      let results: Book[] = service.getSearchResults('johnny');
      for(let i = 0; i < 10; i++) {
        expect(results[i].title).toBe('Search Result ' + i);
      }
    
  }
);
describe('getBooksToRead()', () => {
  it("Finds that 3 Book Objects returned", () =>{
    let results: Book[] = service.getBooksToRead();
    expect(results).toBeTruthy()
    expect(results.length).toBe(3);
  });

  it('has a title for each book of "To Read"', () =>{
    let results: Book[] = service.getBooksToRead();
    for(let i = 0; i < 3; i++) {
      expect(results[i].title).toBe('To Read ' + i);
    }
  
});
});
  });
});
