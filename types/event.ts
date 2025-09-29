type Venue = {
  name: string;
  image: string;
  location: string;
};

export type Event = {
  id: number;
  title: string;
  paragraph: string;
  cover_image: string;
  main_image?: string;
  venue: Venue;
  tags: string[];
  date: string;
  year: number;
};
