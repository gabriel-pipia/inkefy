import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './routes/all/all.component';
import { PendingComponent } from './routes/pending/pending.component';
import { CompletedComponent } from './routes/completed/completed.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllComponent },
  { path: 'pending', component: PendingComponent },
  { path: 'completed', component: CompletedComponent },
  { path: '**', redirectTo: 'all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
