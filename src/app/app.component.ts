import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Chris';


  // Step 1: One way binding of data
  person = {
    givenName: 'Chris',
    surName: 'Kleideris',
    age: 31,
    email: 'KleiderisCh@aueb.gr'
  }

// Step 3: Component Input
person0: Person = {
  givenName: "Christodoulos",
  surName: "Fragkoudakis",
  age: 55,
  email: "chfrag@aueb.gr",
  address: "Athens, Greece"
}

person1: Person = {
  givenName: "Jhon",
  surName: "Doe",
  age: 32,
  email: "Jhon@example.com",
  address: "New York, USA"
}

users: Person[] = [
  {
    "givenName": "Geoff",
    "surName": "Lanchbury",
    "email": "glanchbury0@ca.gov",
    "age": 1,
    "address": "Suite 60"
  }, {
    "givenName": "Zitella",
    "surName": "Yewdell",
    "email": "zyewdell1@devhub.com",
    "age": 2,
    "address": "Room 1505"
  }, {
    "givenName": "Pauly",
    "surName": "Pegg",
    "email": "ppegg2@irs.gov",
    "age": 3,
    "address": "Suite 99"
  }, {
    "givenName": "Sonnie",
    "surName": "Willshaw",
    "email": "swillshaw3@yale.edu",
    "age": 4,
    "address": "Room 1895"
  }, {
    "givenName": "Jerry",
    "surName": "Briscam",
    "email": "jbriscam4@hugedomains.com",
    "age": 5,
    "address": "Apt 810"
  }, {
    "givenName": "Marietta",
    "surName": "Sinnott",
    "email": "msinnott5@chicagotribune.com",
    "age": 6,
    "address": "17th Floor"
  }, {
    "givenName": "Lyndell",
    "surName": "Guirardin",
    "email": "lguirardin6@topsy.com",
    "age": 7,
    "address": "Room 1153"
  }, {
    "givenName": "Donella",
    "surName": "Staite",
    "email": "dstaite7@cnbc.com",
    "age": 8,
    "address": "2nd Floor"
  }, {
    "givenName": "Sarine",
    "surName": "Whelpdale",
    "email": "swhelpdale8@pinterest.com",
    "age": 9,
    "address": "Apt 924"
  }, {
    "givenName": "Lorrin",
    "surName": "Anthoine",
    "email": "lanthoine9@shop-pro.jp",
    "age": 10,
    "address": "Apt 113"
  }, {
    "givenName": "Birdie",
    "surName": "Rosier",
    "email": "brosiera@nyu.edu",
    "age": 11,
    "address": "Suite 74"
  }, {
    "givenName": "Harrietta",
    "surName": "Aleksandrov",
    "email": "haleksandrovb@paypal.com",
    "age": 12,
    "address": "Apt 1416"
  }, {
    "givenName": "Pincus",
    "surName": "Stubbington",
    "email": "pstubbingtonc@java.com",
    "age": 13,
    "address": "Room 1728"
  }, {
    "givenName": "Euphemia",
    "surName": "Laming",
    "email": "elamingd@usa.gov",
    "age": 14,
    "address": "Suite 22"
  }, {
    "givenName": "Phil",
    "surName": "Stowgill",
    "email": "pstowgille@typepad.com",
    "age": 15,
    "address": "10th Floor"
  }, {
    "givenName": "Bradley",
    "surName": "Bein",
    "email": "bbeinf@forbes.com",
    "age": 16,
    "address": "PO Box 95607"
  }, {
    "givenName": "Crawford",
    "surName": "Sumbler",
    "email": "csumblerg@hexun.com",
    "age": 17,
    "address": "Apt 381"
  }, {
    "givenName": "Gisela",
    "surName": "Londesborough",
    "email": "glondesboroughh@webs.com",
    "age": 18,
    "address": "Apt 345"
  }, {
    "givenName": "Mart",
    "surName": "Graalmans",
    "email": "mgraalmansi@goo.ne.jp",
    "age": 19,
    "address": "Suite 96"
  }, {
    "givenName": "Sonni",
    "surName": "Oertzen",
    "email": "soertzenj@dmoz.org",
    "age": 20,
    "address": "Apt 1641"
  }
]

}
