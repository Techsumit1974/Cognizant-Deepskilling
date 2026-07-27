import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export const errorHandlerInterceptor:HttpInterceptorFn=(req,next)=>next(req).pipe(
catchError(err=>{
if(err.status===401) alert('Unauthorized');
if(err.status===500) alert('Server Error');
return throwError(()=>err);
}));