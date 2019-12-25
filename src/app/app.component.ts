import {AfterViewInit, Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from './services/students.service';
import {fromEvent, interval, merge, Observable, Subject} from 'rxjs';
import {map, mergeAll, mergeMap, switchAll, switchMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [
  //   StudentsService
  // ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'test-ng';
  unsubscribeAll = new Subject();


  @ViewChild('testButton', {static: false, read: ElementRef}) testButton: ElementRef;
  @ViewChild('stopButton', {static: false, read: ElementRef}) stopButton: ElementRef;

  interval$: Observable<number> = interval(1000);
  click$: Observable<any>;

  constructor(@Inject(LOCALE_ID) locale: string, private studentsService: StudentsService) {
    console.log(locale);
  }

  ngOnInit() {
    this.studentsService.behaviorSubject.subscribe(val => {
      console.log('AppComponent', val);
    });

    this.studentsService.behaviorSubject.next(222);

    // const observable$ = this.click$.pipe(map(event => {
    //   return this.interval$;
    // }));

    // this.click$.subscribe(val => {
    //   console.log(val);
    //   this.interval$.subscribe(num => console.log(num));
    // });

    // clicksToInterval$.subscribe(intervalObservable => {
    //     //   intervalObservable.subscribe(val => {
    //     //     console.log(val);
    //     //   });
    //     // });

    // observable$.pipe(switchAll()).subscribe(num => console.log(num));

  }

  ngAfterViewInit() {

    this.click$ = fromEvent(this.testButton.nativeElement, 'click');
    this.click$.pipe(
        switchMap(() => this.interval$),
        takeUntil(this.unsubscribeAll)
      )
      .subscribe(val => console.log(val));

  }

  unsubscribe() {
    console.log('unsubscribe');
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
    this.unsubscribeAll.next();
  }
}
