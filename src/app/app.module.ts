import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LuigiAngularSupportModule, LuigiAutoRoutingService } from '@luigi-project/client-support-angular';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
];

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, HttpClientModule,LuigiAngularSupportModule,
  RouterModule.forRoot(
    appRoutes
  )],
  providers: [LuigiAutoRoutingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
