import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';

const firebaseConfig = {
  apiKey: "AIzaSyDCYAK4iQqFAOUrSiNsMdedZrSVBRktY1U",
  authDomain: "hillcrestacademy.firebaseapp.com",
  projectId: "hillcrestacademy",
  storageBucket: "hillcrestacademy.appspot.com",
  messagingSenderId: "558265908031",
  appId: "1:558265908031:web:7b28c7b8cefda2b8f0318a"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule,
    ToastNotificationsModule.forRoot({duration: 6000, type: 'primary'}),
  ],
  providers: [ToastNotificationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
