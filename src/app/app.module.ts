import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './event/event.component';
import { BenchinfoComponent } from './benchinfo/benchinfo.component';
// import { BoardinfoComponent } from './boardinfo/boardinfo.component';
import { QnaComponent } from './qna/qna.component';
import { AuthService } from './auth.service';
import { EventcheckComponent } from './eventcheck/eventcheck.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ListsService } from './lists.service';
import { HttpModule } from '@angular/http';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { QnadetailComponent } from './qnadetail/qnadetail.component';
import { BenchcheckComponent } from './benchcheck/benchcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    EventComponent,
    BenchinfoComponent,
    // BoardinfoComponent,
    QnaComponent,
    EventcheckComponent,
    EventdetailComponent,
    QnadetailComponent,
    BenchcheckComponent
  ],
  imports: [ 
    HttpModule,
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
      // {
      //   path: 'boardinfo',
      //   component: BoardinfoComponent
      // },
      {
        path:'',
        component: HomeComponent
      },
      {
        path: 'eventcheck',
        component: EventcheckComponent
      },
      {
        path: 'benchcheck',
        component: BenchcheckComponent
      }
    ])
  ],
  providers: [AuthService,ListsService, {provide: LocationStrategy, useClass: HashLocationStrategy} , CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
