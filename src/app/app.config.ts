import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideFirebaseApp(() => initializeApp({"projectId":"listable-4bbfb","appId":"1:140485207614:web:ebb290415628fe3ac7d36f","databaseURL":"https://listable-4bbfb-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"listable-4bbfb.appspot.com","apiKey":"AIzaSyDntZirL52bGbM3FHyaK0eU8wWZ5BBJlaw","authDomain":"listable-4bbfb.firebaseapp.com","messagingSenderId":"140485207614","measurementId":"G-TVVBFDXQ2J"})), 
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"listable-4bbfb","appId":"1:140485207614:web:ebb290415628fe3ac7d36f","databaseURL":"https://listable-4bbfb-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"listable-4bbfb.appspot.com","apiKey":"AIzaSyDntZirL52bGbM3FHyaK0eU8wWZ5BBJlaw","authDomain":"listable-4bbfb.firebaseapp.com","messagingSenderId":"140485207614","measurementId":"G-TVVBFDXQ2J"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())],
};
