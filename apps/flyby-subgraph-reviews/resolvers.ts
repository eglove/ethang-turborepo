import type reviewsData from './datasources/reviews-data';
import { type FlyByReviewContext } from './index';
import { type GraphQlReturn } from './types';

export const resolvers = {
  Mutation: {
    submitReview(
      _: unknown,
      { locationReview }: { locationReview: typeof reviewsData.reviews[0] },
      { dataSources }: FlyByReviewContext
    ): GraphQlReturn<{ locationReview: typeof reviewsData.reviews[0] }> {
      const newReview =
        dataSources.reviewsApi.submitReviewForLocation(locationReview);
      return {
        code: 200,
        locationReview: newReview,
        message: 'success',
        success: true,
      };
    },
  },
  Query: {
    latestReviews(
      _: unknown,
      __: unknown,
      { dataSources }: FlyByReviewContext
    ): typeof reviewsData.reviews {
      return dataSources.reviewsApi.getLatestReviews();
    },
  },
};
