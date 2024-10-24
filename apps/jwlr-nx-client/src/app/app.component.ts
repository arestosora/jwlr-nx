// apps/store/src/app/app.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, HeaderComponent, FooterComponent, CardsComponent],
  templateUrl: `./app.component.html`,
  styles: [],
})
export class AppComponent {
  title = 'jwlr';
}