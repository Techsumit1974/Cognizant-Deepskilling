import { createReducer,on } from '@ngrx/store';
import * as A from './enrollment.actions';
export interface EnrollmentState{enrolledCourseIds:number[];}
export const initialState:EnrollmentState={enrolledCourseIds:[]};
export const enrollmentReducer=createReducer(initialState,
on(A.enrollInCourse,(s,{courseId})=>({...s,enrolledCourseIds:[...s.enrolledCourseIds,courseId]})),
on(A.unenrollFromCourse,(s,{courseId})=>({...s,enrolledCourseIds:s.enrolledCourseIds.filter(x=>x!==courseId)}))
);