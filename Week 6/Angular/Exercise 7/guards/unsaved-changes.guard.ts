import { CanDeactivateFn } from '@angular/router';
export const unsavedChangesGuard:CanDeactivateFn<any>=(c)=>!c.enrollForm?.dirty||confirm('You have unsaved changes. Leave?');