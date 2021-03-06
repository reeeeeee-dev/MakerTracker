import { LayoutModule } from '@angular/cdk/layout';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MakerComponentsModule } from './components/maker-components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { JWTInterceptorInterceptor } from './jwtinterceptor.interceptor';
import { LookupModule } from './lookup-manager/lookup.module';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { InitProfileComponent } from './Profiles/init-profile/init-profile.component';
import { UpdateProfileComponent } from './Profiles/update-profile/update-profile.component';
import { AuthService } from './services/auth/auth.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    FooterNavComponent,
    DashboardComponent,
    UpdateProfileComponent,
    InitProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MakerComponentsModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      { 
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: UpdateProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile/:id',
        component: UpdateProfileComponent,
        canActivate: [AuthGuard, AdminGuard]
      }
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    LookupModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptorInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [AuthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function initAuth(auth: AuthService) {
  return () => auth.isAuthenticated$.toPromise();
}
