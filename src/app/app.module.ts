import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { CelularesComponent } from './components/celulares/celulares.component';

@NgModule({
  declarations: [App, ProductosComponent, LaptopsComponent, CelularesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
