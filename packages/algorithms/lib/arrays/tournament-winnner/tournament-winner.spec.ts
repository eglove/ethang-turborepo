/* eslint-disable sonarjs/no-duplicate-string */
import { tournamentWinner } from './tournament-winner';

const samples = [
  {
    bestTeam: 'Python',
    competitions: [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML'],
    ],
    results: [0, 0, 1],
  },
  {
    bestTeam: 'Java',
    competitions: [
      ['HTML', 'Java'],
      ['Java', 'Python'],
      ['Python', 'HTML'],
    ],
    results: [0, 1, 1],
  },
  {
    bestTeam: 'C#',
    competitions: [
      ['HTML', 'Java'],
      ['Java', 'Python'],
      ['Python', 'HTML'],
      ['C#', 'Python'],
      ['Java', 'C#'],
      ['C#', 'HTML'],
    ],
    results: [0, 1, 1, 1, 0, 1],
  },
  {
    bestTeam: 'C#',
    competitions: [
      ['HTML', 'Java'],
      ['Java', 'Python'],
      ['Python', 'HTML'],
      ['C#', 'Python'],
      ['Java', 'C#'],
      ['C#', 'HTML'],
      ['SQL', 'C#'],
      ['HTML', 'SQL'],
      ['SQL', 'Python'],
      ['SQL', 'Java'],
    ],
    results: [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
  },
  {
    bestTeam: 'Bulls',
    competitions: [['Bulls', 'Eagles']],
    results: [1],
  },
  {
    bestTeam: 'Eagles',
    competitions: [
      ['Bulls', 'Eagles'],
      ['Bulls', 'Bears'],
      ['Bears', 'Eagles'],
    ],
    results: [0, 0, 0],
  },
  {
    bestTeam: 'Bulls',
    competitions: [
      ['Bulls', 'Eagles'],
      ['Bulls', 'Bears'],
      ['Bulls', 'Monkeys'],
      ['Eagles', 'Bears'],
      ['Eagles', 'Monkeys'],
      ['Bears', 'Monkeys'],
    ],
    results: [1, 1, 1, 1, 1, 1],
  },
  {
    bestTeam: 'AlgoMasters',
    competitions: [
      ['AlgoMasters', 'FrontPage Freebirds'],
      ['Runtime Terror', 'Static Startup'],
      ['WeC#', 'Hypertext Assassins'],
      ['AlgoMasters', 'WeC#'],
      ['Static Startup', 'Hypertext Assassins'],
      ['Runtime Terror', 'FrontPage Freebirds'],
      ['AlgoMasters', 'Runtime Terror'],
      ['Hypertext Assassins', 'FrontPage Freebirds'],
      ['Static Startup', 'WeC#'],
      ['AlgoMasters', 'Static Startup'],
      ['FrontPage Freebirds', 'WeC#'],
      ['Hypertext Assassins', 'Runtime Terror'],
      ['AlgoMasters', 'Hypertext Assassins'],
      ['WeC#', 'Runtime Terror'],
      ['FrontPage Freebirds', 'Static Startup'],
    ],
    results: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  },
  {
    bestTeam: 'SQL',
    competitions: [
      ['HTML', 'Java'],
      ['Java', 'Python'],
      ['Python', 'HTML'],
      ['C#', 'Python'],
      ['Java', 'C#'],
      ['C#', 'HTML'],
      ['SQL', 'C#'],
      ['HTML', 'SQL'],
      ['SQL', 'Python'],
      ['SQL', 'Java'],
    ],
    results: [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
  },
  {
    bestTeam: 'B',
    competitions: [['A', 'B']],
    results: [0],
  },
];

describe('tournament winner', () => {
  it('should work with original attempt', () => {
    for (const sample of samples) {
      expect(tournamentWinner(sample.competitions, sample.results)).toEqual(
        sample.bestTeam
      );
    }
  });
});
