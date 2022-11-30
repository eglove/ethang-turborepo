import { readFileSync } from 'node:fs';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { gql } from 'graphql-tag';

const typeDefs = gql(readFileSync('./locations.graphql', { encoding: 'utf8' }));
import { LocationsAPI } from './datasources/locations-api';
import { resolvers } from './resolvers';

export type FlyByLocationsContext = {
  dataSources: {
    locationsApi: LocationsAPI;
  };
};

async function startApolloServer(): Promise<void> {
  const server = new ApolloServer({
    // @ts-expect-error Should be correct
    schema: buildSubgraphSchema({ resolvers, typeDefs }),
  });

  const port = 4001;
  const subgraphName = 'locations';

  try {
    const { url } = await startStandaloneServer(server, {
      async context() {
        return {
          dataSources: {
            locationsApi: new LocationsAPI(),
          },
        };
      },
      listen: { port },
    });

    console.info(`🚀 Subgraph ${subgraphName} running at ${url}`);
  } catch (error) {
    console.error(error);
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
startApolloServer().catch(error => {
  console.error(error);
});
