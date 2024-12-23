import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {
  mockTracksList = [
    {
      name: 'Track 1'
    },
    {
      name: 'Track 2'
    },
    {
      name: 'Track 3'
    }
  ]
}
