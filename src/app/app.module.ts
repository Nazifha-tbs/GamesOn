import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire';


import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';

export const firebaseConfig = {

  apiKey: "AIzaSyCmhgZ5lNorcYbbLVKv_NqBHIPp-ZZFFAg",
  authDomain: "gameson-856e5.firebaseapp.com",
  databaseURL: "https://gameson-856e5.firebaseio.com",
  projectId: "gameson-856e5",
  storageBucket: "gameson-856e5.appspot.com",
  messagingSenderId: "37522550150",
  appId: "1:37522550150:web:11e08a367183a3217c1007",
  measurementId: "G-XBYQHFTWD0"
}

firebase.initializeApp(firebaseConfig);



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
