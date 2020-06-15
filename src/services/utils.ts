import { Dict } from "../types";

export function mapKeys<T>(items: Dict<T>): Dict<string> {
  const keys = {};
  for (let key of Object.keys(items)) {
    keys[key] = key;
  }
  return keys;
}

export function extendDict<T>(collection: Dict<T>, items: Dict<T>): Dict<T> {
  return {
    ...collection,
    ...items,
  };
}
