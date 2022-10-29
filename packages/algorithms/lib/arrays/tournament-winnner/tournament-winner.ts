export const tournamentWinner = (
  competitions: string[][],
  results: number[]
): string => {
  const teamScores: Record<string, number> = {};
  let bestTeam = competitions[0][0];

  for (const [index, result] of results.entries()) {
    const winner =
      result === 0 ? competitions[index][1] : competitions[index][0];

    if (Object.prototype.hasOwnProperty.call(teamScores, winner)) {
      teamScores[winner] += 1;
    } else {
      teamScores[winner] = 1;
    }

    if (
      teamScores[winner] > teamScores[bestTeam] ||
      typeof teamScores[bestTeam] === 'undefined'
    ) {
      bestTeam = winner;
    }
  }

  return bestTeam;
};
