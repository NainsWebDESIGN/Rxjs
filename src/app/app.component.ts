import { Component } from '@angular/core';
import { ConcatService } from '@service/concat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConcatService]
})
export class AppComponent {
  title = 'app';
}
