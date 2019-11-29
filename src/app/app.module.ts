import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { EleTestComponent } from './ele-test/ele-test.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    EleTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [EleTestComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const el = createCustomElement(EleTestComponent, { injector: this.injector });
    customElements.define('my-ele', el);
  }

}
