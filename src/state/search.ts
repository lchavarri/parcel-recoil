import { atom } from "recoil";

export const searchTermState = atom<string>({
  key: "searchTerm",
  default: "",
});
