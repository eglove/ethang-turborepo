import type { CSSProperties } from 'react';

export const closedTemplateAreas = {
  gridTemplateAreas: `
    "CourseTitle YearUpdated"
  `,
};

export const openTemplateAreas = {
  gridTemplateAreas: `
    "CourseTitle YearUpdated"
    "Rating ReviewUrl"
    "Summary Summary"
    "CourseLinks CourseLinks"
  `,
};

const defaultRatingYearStyles = {
  color: 'hsl(0deg 0% 100%)',
  padding: '2px 8px',
  textShadow: 'hsl(110deg 23% 39%) 2px 2px 3px',
};

export const ratingStyles = (rating: number): CSSProperties => {
  switch (rating) {
    case 5: {
      return {
        ...defaultRatingYearStyles,
        backgroundColor: '#16DA16',
      };
    }

    case 4: {
      return {
        ...defaultRatingYearStyles,
        backgroundColor: '#4EA613',
      };
    }

    case 3: {
      return {
        ...defaultRatingYearStyles,
        backgroundColor: '#857311',
      };
    }

    case 2: {
      return {
        ...defaultRatingYearStyles,
        backgroundColor: '#BD3F0E',
      };
    }

    default: {
      return {
        ...defaultRatingYearStyles,
        backgroundColor: '#F40B0B',
      };
    }
  }
};

export const yearUpdatedStyles = (
  yearUpdated?: number | null
): CSSProperties => {
  const thisYear = new Date().getFullYear();

  switch (yearUpdated) {
    case thisYear: {
      return {
        ...defaultRatingYearStyles,
        backgroundColor: 'hsl(120deg 82% 47%)',
      };
    }

    case thisYear - 1: {
      return {
        ...defaultRatingYearStyles,
        backgroundColor: 'hsl(33deg 91% 56%)',
      };
    }

    case thisYear - 2: {
      return {
        ...defaultRatingYearStyles,
        backgroundColor: 'hsl(0deg 100% 50%)',
      };
    }

    default: {
      return {
        ...defaultRatingYearStyles,
      };
    }
  }
};
