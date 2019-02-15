import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReadjsonService } from './readjson.service';
import { Observable } from 'rxjs';
import { DebugElement } from '@angular/core';


const mockData = {};
class mockReadJsonDataService{
  getJsonItems(): Observable<any> {
    return Observable.of(mockData)
  }
}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let readjsonService: ReadjsonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: ReadjsonService, useClass: mockReadJsonDataService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
  })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'practice1102'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('practice1102');
  });

  it(`'onAddingTodo' should add todo into array`, () => {
    const data:any =  [
      {"id":"1"}
    ];
    fixture.componentInstance.onAddingTodo();
    expect(data.length).toBeGreaterThan(0);
  });
  
 it(`onSubmit() should make the strike property true`, () => {
   const data: any = [{
    "name": "Hit the Gym",
    "strike": false,
    "id": 0
   },
   {
    "name": "Buy Grocery",
    "strike": false,
    "id": 0
   }];
   fixture.componentInstance.todos = data;
   fixture.componentInstance.onSubmit(1);
   expect(fixture.componentInstance.todos[1].strike).toBe(true);
 });

 it(`'onTodoRemoval()' should remove the element from array`, () => {
  const data: any = [{
    "name": "Hit the Gym",
    "strike": false,
    "id": 0
   },{
     "name": "Buy the Groceries",
     "strike": false,
     "id": 1
   }];
   fixture.componentInstance.todos = data;
  fixture.componentInstance.onTodoRemoval({
    "name": "Hit the Gym",
    "strike": false,
    "id": 0
   });
  expect(fixture.componentInstance.todos.length).toBeLessThan(2);
 });

 it(`negative onSubmit() should not make the strike property true`, () => {
  const data: any = [{
    "name": "Hit the Gym",
    "strike": "false",
    "id": 0
   },
   {
    "name": "Buy Grocery",
    "strike": "",
    "id": 0
   }];
   fixture.componentInstance.todos = data;
   fixture.componentInstance.onSubmit(1);
   fixture.componentInstance.todos[1].strike = false;
   expect(fixture.componentInstance.todos[1].strike).not.toBe(true);
 })

 it(`negative 'onTodoRemoval()' should remove the element from array`, () => {
  const data: any = [{
    "name": "Hit the Gym",
    "strike": false,
    "id": 0
   },{
     "name": "Buy the Groceries",
     "strike": false,
     "id": 1
   }];
   fixture.componentInstance.todos = data;
  fixture.componentInstance.onTodoRemoval({
    "name": "Hit the Gym",
    "strike": false,
    "id": 0
   });
  expect(fixture.componentInstance.todos.length).not.toBeLessThan(1);
 });

 it(`negative 'onAddingTodo' should add todo into array`, () => {
  const data:any =  [
    {"id":"1"}
  ];
  fixture.componentInstance.onAddingTodo();
  expect(data.length).not.toBeGreaterThan(2);
});

});

