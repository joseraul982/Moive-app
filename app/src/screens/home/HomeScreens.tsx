import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { useMovies } from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import PosterCarrusel from "../../components/movies/PosterCarrusel";
import HorizontalCarousel from "../../components/movies/HorizontalCarousel";

const HomeScreens = () => {
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
  } = useMovies();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {/* Principal */}
      <PosterCarrusel movies={nowPlaying} />
      {/* Populares */}
      <HorizontalCarousel
        movies={popular}
        title="Populares"
        loandNextPage={popularNextPage}
      />
      {/* Top Rated */}
      <HorizontalCarousel movies={topRated} title="Mejor calificadas" />
      {/* Próximamente */}
      <HorizontalCarousel movies={upcoming} title="Próximamente" />
    </ScrollView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
