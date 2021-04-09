import { getMovies, getMovie, suggestMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggest: (_, { id }) => suggestMovies(id),
  },
};

export default resolvers;
