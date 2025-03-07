import React, { useState } from "react";
import { View, ScrollView, Animated, StyleSheet, Dimensions } from "react-native";
import { Appbar, TextInput, Card, Button } from "react-native-paper"; // Adicionei o Button aqui
import EventCard from "../components/EventCard";
import { events } from "../data";
import Swiper from "react-native-swiper";

const categories = ["Todos", "Música", "Arte", "Esportes", "Gastronomia"];

// Dados dos banners
const banners = [
  { id: 1, image: "https://picsum.photos/400/200" },
  { id: 2, image: "https://picsum.photos/400/200" },
  { id: 3, image: "https://picsum.photos/400/200" },
];

const ExplorarScreen = ({ navigation }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchWidth] = useState(new Animated.Value(0));
  const [selectedCategory, setSelectedCategory] = useState("Todos"); // Estado para a categoria selecionada

  // Função para alternar a visibilidade do campo de pesquisa
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    Animated.timing(searchWidth, {
      toValue: showSearch ? 0 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // Função para adicionar um evento
  const handleAddEvent = () => {
    const isLoggedIn = false; // Mockado
    if (!isLoggedIn) {
      navigation.navigate("Login");
    } else {
      navigation.navigate("EventForm");
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Appbar.Header>
        <Appbar.Action icon="magnify" onPress={toggleSearch} />
        <Animated.View style={[styles.searchInputContainer, { width: searchWidth }]}>
          <TextInput
            placeholder="Pesquisar..."
            style={styles.searchInput}
            autoFocus={showSearch}
          />
        </Animated.View>
        <View style={{ flex: 1 }} /> {/* Espaço flexível */}
        <Appbar.Action icon="plus" onPress={handleAddEvent} />
      </Appbar.Header>

      {/* Carrossel de banners com Swiper */}
      <Swiper
        style={styles.wrapper}
        autoplay
        loop
        showsPagination
        paginationStyle={styles.pagination}
        dotColor="#CCC"
        activeDotColor="#000"
      >
        {banners.map((banner) => (
          <View key={banner.id} style={styles.slide}>
            <Card style={styles.banner}>
              <Card.Cover source={{ uri: banner.image }} />
            </Card>
          </View>
        ))}
      </Swiper>

      {/* Filtros de categoria */}
      <ScrollView horizontal style={styles.filterContainer}>
        {categories.map((category, index) => (
          <Button
            key={index}
            mode={selectedCategory === category ? "contained" : "outlined"}
            onPress={() => setSelectedCategory(category)}
            style={styles.filterButton}
          >
            {category}
          </Button>
        ))}
      </ScrollView>

      {/* Lista de eventos */}
      <ScrollView style={styles.eventList}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  searchInputContainer: {
    overflow: "hidden",
    marginLeft: 8,
  },
  searchInput: {
    backgroundColor: "transparent",
  },
  wrapper: {
    height: 200, // Altura do carrossel
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    width: "90%", // Largura do banner
    height: "90%", // Altura do banner
    borderRadius: 8,
    overflow: "hidden",
  },
  pagination: {
    bottom: 10, // Posição dos pontos de paginação
  },
  filterContainer: {
    padding: 16,
  },
  filterButton: {
    marginRight: 8, // Espaçamento entre os botões de filtro
  },
  eventList: {
    padding: 16,
  },
});

export default ExplorarScreen;