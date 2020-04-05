import { places, Place } from "../data/place";

export const getPlace = (regionId: string, previousId: string): Place => {
  if (regionId) {
    const filtered = places.filter((p) => p.regionId === regionId);
    return getRandom(removePrevious(filtered, previousId));
  }

  return getRandom(removePrevious(places, previousId));
};

const getRandom = (array: any) => {
  return array[Math.floor(Math.random() * array.length)];
};

const removePrevious = (array: Place[], previousId: string) => {
  if (array.length && array.length > 1) {
    return array.filter((p) => p.id !== previousId);
  }

  return [...array];
};
