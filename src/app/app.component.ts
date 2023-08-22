import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { APP_INFO, AppInfo } from './core/services/constants.service';
import { RANDON_GENERATOR, generatorFactory } from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CartsModule,
    ProductsModule,
    RouterOutlet,
  ],
  providers: [
    GeneratorService,
    {provide: APP_INFO, useValue: AppInfo},
    {provide: RANDON_GENERATOR, useFactory: generatorFactory(6)}
    // {provide: RANDON_GENERATOR, useFactory: generatorFactory(6), deps: [GeneratorService]}
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef;

  title = 'Shop' + ` ${this.sequience}`;

  constructor(
    @Inject(APP_INFO) public appInfo: {App: string, Ver: string, API_URL: string},
    @Inject(RANDON_GENERATOR) public sequience: string) {

  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = this.title;
  }
}
