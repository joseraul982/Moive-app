import {
  StyleSheet,
  Image,
  View,
  useWindowDimensions,
  Text,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FullMovie } from "@/app/core/entities/movies.entity";

interface Props {
  movie: FullMovie;
}

const MovieHeader = ({ movie }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <>
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.6 }}>
        <View style={styles.imageBorder}>
          <Image style={styles.posterImage} source={{ uri: movie.poster }} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.originalTitle}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    backgroundColor: "#f5f5f5",
  },
  imageBorder: {
    flex: 1,
    overflow: "hidden",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
    resizeMode: "stretch",
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "#7d7d7d",
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
