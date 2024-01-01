import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent]
})
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideNoopAnimations()]
};
