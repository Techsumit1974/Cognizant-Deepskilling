import { TestBed,ComponentFixture } from '@angular/core/testing';
import { provideMockStore,MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent with Store',()=>{
 let fixture:ComponentFixture<CourseListComponent>;
 let store:MockStore;
 const initialState={course:{courses:[{id:1,name:'Angular'},{id:2,name:'Java'}],loading:false,error:null}};

 beforeEach(async()=>{
  await TestBed.configureTestingModule({
   imports:[CourseListComponent],
   providers:[provideMockStore({initialState})]
  }).compileComponents();
  store=TestBed.inject(MockStore);
  fixture=TestBed.createComponent(CourseListComponent);
 });

 it('should render initial courses',()=>{
  fixture.detectChanges();
  expect(fixture.nativeElement.textContent).toContain('Angular');
 });

 it('should show loading state',()=>{
  store.setState({course:{courses:[],loading:true,error:null}});
  fixture.detectChanges();
  expect(fixture.nativeElement.textContent).toContain('Loading');
 });
});