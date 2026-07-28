import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType } from '@ngrx/effects';
import { switchMap,map,catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CourseActions from './course.actions';
import { CourseService } from '../../services/course.service';
@Injectable()
export class CourseEffects{
constructor(private actions$:Actions,private service:CourseService){}
loadCourses$=createEffect(()=>this.actions$.pipe(
ofType(CourseActions.loadCourses),
switchMap(()=>this.service.getCourses().pipe(
map(c=>CourseActions.loadCoursesSuccess({courses:c})),
catchError(e=>of(CourseActions.loadCoursesFailure({error:e.message})))
))
));
}