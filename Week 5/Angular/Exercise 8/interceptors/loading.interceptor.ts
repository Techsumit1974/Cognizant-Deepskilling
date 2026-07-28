import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
export const loadingInterceptor:HttpInterceptorFn=(req,next)=>{
const ls=inject(LoadingService);
ls.isLoading$.next(true);
return next(req).pipe(finalize(()=>ls.isLoading$.next(false)));
};