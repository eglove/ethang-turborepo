import { default as reviewData } from './reviews-data';

export class ReviewsAPI {
  getReview(id: string): typeof reviewData.reviews[0] | undefined {
    return reviewData.reviews.find(review => {
      return review.id === id;
    });
  }

  getReviewsForLocation(id: string): typeof reviewData.reviews {
    return reviewData.reviews.filter(r => {
      return r.locationId === id;
    });
  }

  getLatestReviews(): typeof reviewData.reviews {
    return reviewData.reviews.slice(Math.max(reviewData.reviews.length - 3, 0));
  }

  getOverallRatingForLocation(id: string): number {
    const allRatings = reviewData.reviews
      .filter(r => {
        return r.locationId === id;
      })
      .map(r => {
        return r.rating;
      });
    const sum = allRatings.reduce((a, b) => {
      return a + b;
    }, 0);
    const average = sum / allRatings.length || 0;
    return average;
  }

  submitReviewForLocation(
    review: typeof reviewData.reviews[0]
  ): typeof reviewData.reviews[0] {
    const newReview = { ...review, id: `rev-${reviewData.reviews.length + 1}` };
    reviewData.reviews = [...reviewData.reviews, newReview];
    return newReview;
  }
}
