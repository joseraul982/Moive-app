

import { AixosAdapter } from "./http/aixos.adapters";
export const movieDBFetcher = new AixosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "",

    language: "es",
  },
});
