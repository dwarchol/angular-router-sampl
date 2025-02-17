import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {HeroesListComponent} from "./heroes-list/heroes-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-router-sample';
}
