import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guarrd'
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component'
import { MaptbwithprocessComponent } from './maptbwithprocess/maptbwithprocess.component'
import { ControltestingComponent } from './controltesting/controltesting.component'
import { ControldevelopmentComponent } from './controldevelopment/controldevelopment.component'
import { ControlerdesigntabComponent } from './controlerdesigntab/controlerdesigntab.component'
import { ProcessdocumentComponent } from './processdocument/processdocument.component'
import { RiskidentificationComponent } from './riskidentification/riskidentification.component'
import { SettingComponent } from './setting/setting.component'
import { TesterscreenComponent } from './testerscreen/testerscreen.component'
import { TestingscheduleComponent } from './testingschedule/testingschedule.component'
import { ControldesingComponent } from './controldesing/controldesing.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'maptbwithprocess', component: MaptbwithprocessComponent },
  { path: 'controltesting', component: ControltestingComponent },
  { path: 'controldevelopment', component: ControldevelopmentComponent },
  { path: 'controlerdesigntab', component: ControlerdesigntabComponent },
  { path: 'processdocument', component: ProcessdocumentComponent },
  { path: 'riskidentification', component: RiskidentificationComponent },
  { path: 'testerscreen', component: TesterscreenComponent },
  { path: 'testingschedule', component: TestingscheduleComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'controldesing', component: ControldesingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
