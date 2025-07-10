import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
//   { path: '', component: HomeComponent, title: 'Home' },
//   { path: 'about', component: AboutComponent, title: 'About' },
//   { path: 'experience', component: ExperienceComponent, title: 'Experience' },
//   {path: 'journey', component: ExperienceComponent, title: 'Journey'},
//   { path: 'projects', component: ProjectsComponent, title: 'Projects' },
//   { path: 'contact', component: ContactComponent, title: 'Contact' },
//   { path: '**', redirectTo: '', pathMatch: 'full' }

// { path: '', component: HomeComponent, title: 'Home' },
//   { path: 'about', component: AboutComponent, title: 'About' },
//   { 
//     path: 'experience', 
//     component: ExperienceComponent, 
//     title: 'Experience',
//     children: [
//       { path: 'journey', component: ExperienceComponent, title: 'Journey' }
//     ]
//   },
//   { path: 'projects', component: ProjectsComponent, title: 'Projects' },
//   { path: 'contact', component: ContactComponent, title: 'Contact' },
//   { path: '**', redirectTo: '', pathMatch: 'full' }

//    { 
//     path: '',
//     component: HomeComponent,
//     title: 'Home',
//     data: { animation: 'fade' }
//   },
//   { 
//     path: 'about',
//     component: AboutComponent,
//     title: 'About',
//     data: { animation: 'slide' }
//   },
//   { 
//     path: 'experience',
//     component: ExperienceComponent,
//     title: 'Experience',
//     data: { animation: 'slide' },
//     children: [
//       {
//         path: 'journey',
//         component: ExperienceComponent,
//         title: 'Journey',
//         data: { view: 'journey' }
//       }
//     ]
//   },
//   { 
//     path: 'projects',
//     component: ProjectsComponent,
//     title: 'Projects',
//     data: { animation: 'fade' }
//   },
//   { 
//     path: 'contact',
//     component: ContactComponent,
//     title: 'Contact',
//     data: { animation: 'slide' }
//   },
//   { 
//     path: '**',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
  { 
    path: '',
    component: HomeComponent,
    title: 'Home | Dev Portfolio',
    data: { 
      animation: 'homePage',
      preload: true
    }
  },
  { 
    path: 'about',
    component: AboutComponent,
    title: 'About | Dev Portfolio',
    data: { animation: 'aboutPage' }
  },
  { 
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience | Dev Portfolio',
    data: { animation: 'experiencePage' }
  },
  { 
    path: 'experience/journey',
    component: ExperienceComponent,
    title: 'Journey | Dev Portfolio',
    data: { 
      animation: 'journeyPage',
      view: 'journey' 
    }
  },
  { 
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects | Dev Portfolio',
    data: { animation: 'projectsPage' }
  },
  { 
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Dev Portfolio',
    data: { animation: 'contactPage' }
  },
  { 
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }




];
