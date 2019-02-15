import { ReadjsonService } from "./readjson.service";
import { TestBed } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { Observable, of } from 'rxjs';

describe('ReadJsonService', () => {
    let httpSpy: {get: jasmine.Spy};
    let readJsonService: ReadjsonService;

    beforeEach(() => {
        httpSpy = jasmine.createSpyObj('Http', ['get']);
        readJsonService = new ReadjsonService(<any> httpSpy);

        TestBed.configureTestingModule({
            providers: [
                ReadjsonService,
                { provide: Http, useValue: httpSpy }
            ]
        });

        httpSpy = TestBed.get(Http);
        readJsonService = TestBed.get(ReadjsonService);
    });



    /* it('should return an observable', () => {
        const expectedValue: any = [];
        httpSpy.get.and.returnValue(of(expectedValue));

        readJsonService.getJsonItems().subscribe(
            data => expect(data).toEqual(expectedValue, 'expected Value'),
            fail
        );
    }); */

   /*  it('Should Return Error in 404 cases', () => {
        const errResponse = 'test 404 errors';
        httpSpy.get.and.returnValue(errResponse);
        readJsonService.getJsonItems().subscribe(
            data => fail('expected an error'),
            error => expect(error.message).toContain('test 404 errors')
        );
    }); */
});