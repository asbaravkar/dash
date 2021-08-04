import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { UserService } from './shared/services/user.service';
import { AdminService } from './shared/services/admin.service';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserAccountDetailsComponent } from './components/user-account-details/user-account-details.component';
import { UserAccountSummaryComponent } from './components/user-account-summary/user-account-summary.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { UserAccountStatementComponent } from './components/user-account-statement/user-account-statement.component';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AccountListComponent,
    UserDashboardComponent,
    UserAccountDetailsComponent,
    UserAccountSummaryComponent,
    FundTransferComponent,
    UserAccountStatementComponent,
    AddBeneficiaryComponent,
    SetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
