import type locationsData from './datasources/locations-data';
import { type FlyByLocationsContext } from './index';

export const resolvers = {
  Query: {
    location(
      _: unknown,
      { id }: { id: string },
      { dataSources }: FlyByLocationsContext
    ): typeof locationsData.locations[0] | undefined {
      return dataSources.locationsApi.getLocation(id);
    },
    locations(
      _: unknown,
      __: unknown,
      { dataSources }: FlyByLocationsContext
    ): typeof locationsData.locations {
      return dataSources.locationsApi.getAllLocations();
    },
  },
};
