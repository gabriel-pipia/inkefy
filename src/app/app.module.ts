import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AsideComponent } from './layout/aside/aside.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PendingComponent } from './routes/pending/pending.component';
import { CompletedComponent } from './routes/completed/completed.component';
import { AllComponent } from './routes/all/all.component';
import { AddTaskBtnComponent } from './components/add-task-btn/add-task-btn.component';
import { TaskAddModalComponent } from './layout/task-add-modal/task-add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemComponent,
    AsideComponent,
    NavigationComponent,
    PendingComponent,
    CompletedComponent,
    AllComponent,
    AddTaskBtnComponent,
    TaskAddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
