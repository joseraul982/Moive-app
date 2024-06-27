import { StyleSheet, Text, View } from "react-native";
import { Movie } from "@/app/core/entities/movies.entity";
import { ScrollView } from "react-native-gesture-handler";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  height?: number;
}

const PosterCarrusel = ({ height = 350, movies }: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
export default PosterCarrusel;

const styles = StyleSheet.create({});
