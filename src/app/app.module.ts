import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { Globals } from './globals'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MaptbwithprocessComponent } from './maptbwithprocess/maptbwithprocess.component';
import { ControltestingComponent } from './controltesting/controltesting.component';
import { ControldevelopmentComponent } from './controldevelopment/controldevelopment.component';
import { ControlerdesigntabComponent } from './controlerdesigntab/controlerdesigntab.component';
import { ProcessdocumentComponent } from './processdocument/processdocument.component';
import { RiskidentificationComponent } from './riskidentification/riskidentification.component';
import { SettingComponent } from './setting/setting.component';
import { TesterscreenComponent } from './testerscreen/testerscreen.component';
import { TestingscheduleComponent } from './testingschedule/testingschedule.component';
import { ControldesingComponent } from './controldesing/controldesing.component';

@NgModule({
  declarations: [											
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    MaptbwithprocessComponent,
    ControltestingComponent,
    ControldevelopmentComponent,
    ControlerdesigntabComponent,
    ProcessdocumentComponent,
    RiskidentificationComponent,
    SettingComponent,
    TesterscreenComponent,
    TestingscheduleComponent,
      ControldesingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  
}
