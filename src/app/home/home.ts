import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housinglocation";
import { HousingService } from "../housing";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  template: `
    <p>home works!</p>
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      @for(housingLocation of filterLocationList; track $index) {
      <app-housing-location
        [housingLocation]="housingLocation"
      ></app-housing-location>
      }
    </section>
  `,
  styleUrls: ["home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filterLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filterLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filterLocationList = this.housingLocationList;
      return;
    }

    this.filterLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
