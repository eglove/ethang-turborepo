import { default as locationData } from './locations-data';
export class LocationsAPI {
  getAllLocations(): typeof locationData.locations {
    return locationData.locations;
  }

  getLocation(id: string): typeof locationData.locations[0] | undefined {
    return locationData.locations.find(location => {
      return location.id === id;
    });
  }
}
