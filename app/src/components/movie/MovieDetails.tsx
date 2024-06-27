import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FullMovie } from "@/app/core/entities/movies.entity";
import { Formatter } from "@/app/config/helpers/format";
import { Cast } from "@/app/core/entities/cast.entity";
import { FlatList } from "react-native-gesture-handler";
import { CastActor } from "../cast/CastActor";

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.rating}>{movie.rating}</Text>
          <Text style={styles.genres}>- {movie.genres.join(", ")}</Text>
        </View>
        <Text style={styles.sectionTitle}>Historia</Text>
        <Text style={styles.description}>{movie.description}</Text>
        <Text style={styles.sectionTitle}>Presupuesto</Text>
        <Text style={styles.budget}>{Formatter.currency(movie.budget)}</Text>
      </View>
      <View style={styles.actorsContainer}>
        <Text style={styles.actorsTitle}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  // Variables de colores

  // Estilos generales
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: "#000", // Color predeterminado del texto
  },
  genres: {
    marginLeft: 5,
    fontSize: 16,
    color: "#7d7d7d",
  },
  sectionTitle: {
    fontSize: 23,
    marginTop: 20,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginVertical: 10,
    lineHeight: 24,
  },
  budget: {
    fontSize: 18,
    color: "#555",
  },
  // Estilos de la sección de actores
  actorsContainer: {
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  actorsTitle: {
    fontSize: 23,
    marginVertical: 10,
    fontWeight: "bold",
    color: "#333",
  },
});
