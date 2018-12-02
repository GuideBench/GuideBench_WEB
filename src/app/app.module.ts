import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './event/event.component';
import { BenchinfoComponent } from './benchinfo/benchinfo.component';
import { BoardinfoComponent } from './boardinfo/boardinfo.component';
import { QnaComponent } from './qna/qna.component';
import { AuthService } from './auth.service';
import { EventcheckComponent } from './eventcheck/eventcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    EventComponent,
    BenchinfoComponent,
    BoardinfoComponent,
    QnaComponent,
    EventcheckComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'event',
        component: EventComponent
      },
      {
        path: 'qna',
        component: QnaComponent
      },
      {
        path: 'benchinfo',
        component: BenchinfoComponent
      },
      {
        path: 'boardinfo',
        component: BoardinfoComponent
      },
      {
        path:'',
        component: HomeComponent
      },
      {
        path: 'eventcheck',
        component: EventcheckComponent
      }
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
