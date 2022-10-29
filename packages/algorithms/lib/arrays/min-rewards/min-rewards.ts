/*
 * Give a list of student scores on a final exam, you want to reward the students. The rewards follow these rules:
 * 1. All students must receive at least one reward.
 * 2. Any given student must receive strictly more rewards than an adjacent student with a lower score
 *    and must strictly receive fewer rewards than an adjacent student with a higher score.
 * Return the minimum number of rewards that you must give out to students to satisfy these two rules.
 * Assume all rewards are unique.
 */
export const minRewards = (scores: number[]): number => {
  const rewards: number[] = Array.from({ length: scores.length });
  rewards.fill(1);

  for (let index = 1; index < scores.length; index++) {
    let index_ = index - 1;

    if (scores[index] > scores[index_]) {
      rewards[index] = rewards[index_] + 1;
    } else {
      while (index_ >= 0 && scores[index_] > scores[index_ + 1]) {
        rewards[index_] = Math.max(rewards[index_], rewards[index_ + 1] + 1);
        index_--;
      }
    }
  }

  return rewards.reduce((a, b) => {
    return a + b;
  });
};

export const minRewardsOptimized = (scores: number[]): number => {
  const rewards: number[] = Array.from({ length: scores.length });
  rewards.fill(1);

  for (let index = 0; index < scores.length; index++) {
    if (scores[index] > scores[index - 1]) {
      rewards[index] = rewards[index - 1] + 1;
    }
  }

  for (let index = scores.length - 2; index >= 0; index--) {
    if (scores[index] > scores[index + 1]) {
      rewards[index] = Math.max(rewards[index], rewards[index + 1] + 1);
    }
  }

  return rewards.reduce((a, b) => {
    return a + b;
  });
};
