// screens/FavoritosScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoritosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Favoritos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritosScreen; // Exportação correta