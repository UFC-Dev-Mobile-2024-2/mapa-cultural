import React, { useState } from "react";
import { View, ScrollView, Animated, StyleSheet } from "react-native";
import { Appbar, TextInput, Button, Card, Title } from "react-native-paper";
import EventCard from "../components/EventCard";
import { events } from "../data";

const ExplorarScreen = ({ navigation }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchWidth] = useState(new Animated.Value(0));

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    Animated.timing(searchWidth, {
      toValue: showSearch ? 0 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

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
        <Appbar.Action icon="plus" onPress={handleAddEvent} />
      </Appbar.Header>

      {/* Banner */}
      <Card style={styles.banner}>
        <Card.Cover source={{ uri: "https://picsum.photos/400/200" }} />
      </Card>

      {/* Cards de Eventos */}
      <ScrollView style={styles.eventList}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </View>
  );
};

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
  banner: {
    margin: 16,
  },
  eventList: {
    padding: 16,
  },
});

export default ExplorarScreen;