import { createReducer,on } from '@ngrx/store';
import * as Actions from './course.actions';
export interface CourseState{courses:any[];loading:boolean;error:string|null;}
export const initialState:CourseState={courses:[],loading:false,error:null};
export const courseReducer=createReducer(
initialState,
on(Actions.loadCourses,s=>({...s,loading:true})),
on(Actions.loadCoursesSuccess,(s,{courses})=>({...s,courses,loading:false})),
on(Actions.loadCoursesFailure,(s,{error})=>({...s,error,loading:false}))
);