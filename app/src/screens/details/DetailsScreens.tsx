import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/Navigation";
import useMovie from "../../hooks/useMovie";
import MovieHeader from "../../components/movie/MovieHeader";
import MovieDetails from "../../components/movie/MovieDetails";
import { ScrollView } from "react-native-gesture-handler";

interface Props extends StackScreenProps<RootStackParams, "Details"> {}

export default function DetailsScreens({ route }: Props) {
  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MovieHeader movie={movie!} />
      <MovieDetails movie={movie!} cast={cast!} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
