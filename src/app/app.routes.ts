import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { JourneyComponent } from './components/journey/journey.component';


export const routes: Routes = [

  // { 
  //   path: '',
  //   component: HomeComponent,
  //   title: 'Home | Dev Portfolio',
  //   data: { 
  //     animation: 'homePage',
  //     preload: true
  //   }
  // },
  // { 
  //   path: 'about',
  //   component: AboutComponent,
  //   title: 'About | Dev Portfolio',
  //   data: { animation: 'aboutPage' }
  // },
  // { 
  //   path: 'experience',
  //   component: ExperienceComponent,
  //   title: 'Experience | Dev Portfolio',
  //   data: { animation: 'experiencePage' }
  // },
  // { 
  //   path: 'experience/journey',
  //   component: ExperienceComponent,
  //   title: 'Journey | Dev Portfolio',
  //   data: { 
  //     animation: 'journeyPage',
  //     view: 'journey' 
  //   }
  // },
  // { 
  //   path: 'projects',
  //   component: ProjectsComponent,
  //   title: 'Projects | Dev Portfolio',
  //   data: { animation: 'projectsPage' }
  // },
  // { 
  //   path: 'contact',
  //   component: ContactComponent,
  //   title: 'Contact | Dev Portfolio',
  //   data: { animation: 'contactPage' }
  // },
  // { 
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }

    { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {path: 'experience', component: ExperienceComponent },
  {path: 'experience/journey', component: JourneyComponent },
  {path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // fallback
  


];
