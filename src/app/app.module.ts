import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ApiWrapperService } from './api-wrapper.service';
import { ManagerService } from './manager.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ManagerService, ApiWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
