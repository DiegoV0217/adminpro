import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//*****************************************************************************/ RUTAS
import { APP_ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//*****************************************************************************/ Modulos
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTES, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
