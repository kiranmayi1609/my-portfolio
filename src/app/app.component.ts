import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { JourneyComponent } from "./components/journey/journey.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NavbarComponent, HomeComponent, AboutComponent, ContactComponent, ProjectsComponent, ExperienceComponent, JourneyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-Portfolio';
}
