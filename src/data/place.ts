export interface Place {
  id: string;
  name: string;
  description?: string;
  regionId: string;
}

export const places: Place[] = [
  {
    id: "45017923-68dc-4b08-8458-2c7254211ad7",
    name: "Intensivvården Blekinge",
    regionId: "1",
  },
  {
    id: "4738c3b7-da23-453b-86c9-8e73085244df",
    name: "Intensivvården Dalarna",
    regionId: "2",
  },
  {
    id: "ce451927-7b23-4eab-b269-ade2c144e1b3",
    name: "Näsa och hals Visby Lasarett",
    regionId: "3",
  },
  {
    id: "ce451927-7b23-4eab-b269-ade2c144e3b3",
    name: "Intensivvården SÖS",
    regionId: "7",
  },
  {
    id: "ce451927-7b23-4eab-b269-ade2c144e3b3",
    name: "Akuten Söderhamns sjukhus",
    regionId: "4",
  },
  {
    id: "ce451927-7b23-4eab-b269-ade2c144e3b3",
    name: "Materialförådet på Hallands sjukhus",
    regionId: "5",
  },
  {
    id: "ce431927-7b23-4eab-b269-ade2c144e3b3",
    name: "Röntgen på Östersunds sjukhus",
    regionId: "6",
  },
];
