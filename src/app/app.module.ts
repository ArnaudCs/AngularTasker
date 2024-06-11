import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [], // Retirez AppComponent de la liste des déclarations
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'tasks', component: TaskComponent }
      // Ajoutez ici les routes de votre application
    ])
  ],
  providers: [],
  bootstrap: [] // Déclarez AppComponent comme le composant de démarrage
})
export class AppModule { }
