import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

  constructor(
    private router: Router
  ) {}

  protected onLearnMore(): void {
    this.router.navigate(['/details', 1]);
  }
  
}
