export type SampleData = {
  users: SampleUser[];
};

export type SampleUser = {
  id: number;
  lists: SampleList[];
  username: string;
};

export type SampleList = {
  id: number;
  learningItems: SampleLearningItem[];
  listName: string;
};

export type SampleLearningItem = {
  id: number;
  name: string;
};

export const sampleData: SampleData = {
  users: [
    {
      id: 0,
      lists: [
        {
          id: 0,
          learningItems: [
            {
              id: 0,
              name: 'Web Dev Bootcamp',
            },
            {
              id: 1,
              name: 'CSS for JS Developers',
            },
          ],
          listName: 'All',
        },
        {
          id: 1,
          learningItems: [],
          listName: 'Completed',
        },
        {
          id: 2,
          learningItems: [],
          listName: 'In Progress',
        },
        {
          id: 3,
          learningItems: [],
          listName: 'Want to Complete',
        },
      ],
      username: 'ethang',
    },
  ],
};
