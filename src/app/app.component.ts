import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // name = 'Chris';

  // // Step 1: One way binding of data
  // person = {
  //   givenName: 'Chris',
  //   surName: 'Kleideris',
  //   age: 31,
  //   email: 'KleiderisCh@aueb.gr'
  // }

// Step 3: Component Input
  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surName: "Fragkoudakis",
  //   age: 55,
  //   email: "chfrag@aueb.gr",
  //   address: "Athens, Greece"
  // }

  // person1: Person = {
  //   givenName: "Jhon",
  //   surName: "Doe",
  //   age: 32,
  //   email: "Jhon@example.com",
  //   address: "New York, USA"
  // }
}
