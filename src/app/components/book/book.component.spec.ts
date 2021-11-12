import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By} from '@angular/platform-browser';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/providers/book.service';


import { BookComponent } from './book.component';

let service: BookService;
/*class MockBookService {
getFavorite(): Book {
return new Book();
}
}*/

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
      declarations: [ BookComponent ]/*,
    providers: [ {
      provide: BookService,
      useClass: MockBookService
      }]*/
      
    }).compileComponents();/*.then(() => {
        service = TestBed.inject(BookService);
    });*/
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('image is present', () =>{
    const labelElement = fixture.debugElement.query(By.css('.image img'));
    expect(labelElement.nativeElement.getAttribute('src')).toBe(component.book.thumbnail);
  });

  it('label is present', () =>{
    const labelElement = fixture.debugElement.query(By.css('.title'));
    expect(labelElement.nativeElement.textContent).toContain('Title: ' +
    component.book.title);
  });
  it('author is present', () =>{
    const labelElement = fixture.debugElement.query(By.css('.author'));
    expect(labelElement.nativeElement.textContent).toContain('Author: ' +
    component.book.author);
  });
  it('description is present', () =>{
    const labelElement = fixture.debugElement.query(By.css('.description'));
    expect(labelElement.nativeElement.textContent).toContain('Description: ' +
    component.book.description);
  });
  it('Button exists', () =>{
    const favoriteButton = fixture.debugElement.query(By.css('.favorite'));
    expect(favoriteButton.nativeElement).toBeDefined()
  });
  it('calls the favorite method when the favorite button is clicked', () => {
    const favoriteButton = fixture.debugElement.query(By.css('.favorite'));
    spyOn(component, 'favorite');
    favoriteButton.nativeElement.click();
    expect(component.favorite).toHaveBeenCalled();
    });
  it('emits a favorite event with the current book when the favorite method is invoked', () => {
    spyOn(component.favoriteEvent, 'emit');
    component.favorite();
    expect(component.favoriteEvent.emit).toHaveBeenCalledWith(component.book);
      });

    /*describe('ngOnInit', () => {
      it('sets the book to be the favorite from the BookService', () => {
      let book: Book = new Book();
      book.title = 'test book';
      spyOn(service, 'getFavorite').and.returnValue(book);
      component.ngOnInit();
      fixture.detectChanges();
      expect(service.getFavorite).toHaveBeenCalled();
      expect(component.book).toBe(book);
      });
      });*/
});


