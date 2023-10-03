import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Optional, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription, interval, map, timer } from 'rxjs';

import { ProductsModule } from './products/products.module';
import { APP_INFO, AppInfo } from './core/services/constants.service';
import { AppSettingsService, RANDON_GENERATOR, generatorFactory, GeneratorService } from './core/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductsModule,
    RouterOutlet,
  ],
  providers: [
    GeneratorService,
    AppSettingsService,
    {provide: APP_INFO, useValue: AppInfo},
    {provide: RANDON_GENERATOR, useFactory: generatorFactory(6)}
    // {provide: RANDON_GENERATOR, useFactory: generatorFactory(6), deps: [GeneratorService]}
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('appTitle')
  private appTitle!: ElementRef;
  private timerSubscription$!: Subscription;

  title = 'Shop' + ` ${this.sequience}`;

  constructor(
    @Inject(APP_INFO) public appInfo: {App: string, Ver: string, API_URL: string},
    @Inject(RANDON_GENERATOR) public sequience: string,
    private appSettings: AppSettingsService,
    @Optional() private generator: GeneratorService) {
  }

  ngOnInit(): void {

    this.appSettings.getSettings()
      .subscribe(settings => {
        console.log(settings);
      });

    this.timerSubscription$ = interval(1500)
    .pipe(map(_ => this.generator.getNewID()))
      .subscribe(id => console.log(id));
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = this.title;
  }

  ngOnDestroy(): void {
    this.timerSubscription$.unsubscribe();
  }
}
