export interface Story {
  id: number;
  title: string;
  url?: string;
  text?: string;
  by: string;
  time: number;
  score: number;
  descendants: number;
  type?: 'story' | 'ask' | 'show' | 'job';
}

export type StoryFilter = 'new' | 'past' | 'comments' | 'ask' | 'show' | 'jobs' | 'submit';