import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})


export class LocationComponent implements OnInit {
  countClick: number = 0;

  lat: number = 0;
  lng: number = 0;


  constructor() {
  }


  ngOnInit(): void {
  }

  handleClick() {
    this.countClick += 1;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          this.lat = position.coords.latitude
          this.lng = position.coords.longitude
        },
        (error: GeolocationPositionError) => {
          console.error('Error getting geolocation:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    
  }

  getMapLink(): string {
    return `https://www.openstreetmap.org/#map=18/${this.lat}/${this.lng}`;
  }
}
