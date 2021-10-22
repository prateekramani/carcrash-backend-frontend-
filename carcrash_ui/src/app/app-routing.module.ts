import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrashcarComponent } from './crashcar/crashcar.component';

const routes: Routes = [
  { path: '', redirectTo: '/crashcar', pathMatch: 'full' },
  { path: 'crashcar', component: CrashcarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
