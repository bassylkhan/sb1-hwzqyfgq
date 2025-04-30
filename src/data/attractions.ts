export interface Attraction {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  description: string;
}

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "Eiffel Tower",
    location: "Paris, France",
    imageUrl: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
    description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris. It's one of the world's most recognizable landmarks and the most visited monument with an entrance fee."
  },
  {
    id: 2,
    name: "Taj Mahal",
    location: "Agra, India",
    imageUrl: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife."
  },
  {
    id: 3,
    name: "Colosseum",
    location: "Rome, Italy",
    imageUrl: "https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg",
    description: "The Colosseum is an oval amphitheatre in the centre of Rome. Built of travertine limestone, volcanic rock, and concrete, it is the largest ancient amphitheatre ever built."
  },
  {
    id: 4,
    name: "Petra",
    location: "Ma'an, Jordan",
    imageUrl: "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg",
    description: "Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabataean Kingdom and is accessed via a narrow canyon called Al Siq."
  },
  {
    id: 5,
    name: "Machu Picchu",
    location: "Cusco Region, Peru",
    imageUrl: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
    description: "Machu Picchu is an Incan citadel set high in the Andes Mountains. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without mortar."
  },
  {
    id: 6,
    name: "Great Wall",
    location: "Beijing, China",
    imageUrl: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg",
    description: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states to protect Chinese states against nomadic invasions."
  }
];