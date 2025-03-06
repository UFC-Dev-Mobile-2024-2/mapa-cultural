import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { events } from "../data";

const HomeScreen = ({ navigation }) => {
  const [eventList, setEventList] = useState(events);

  const handleLike = (id) => {
    setEventList((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, likes: event.likes + 1 } : event
      )
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.5505,
          longitude: -46.6333,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {eventList.map((event) => (
          <Marker
            key={event.id}
            coordinate={event.location}
            title={event.title}
            description={event.description}
          />
        ))}
      </MapView>
      <View style={styles.eventList}>
        {eventList.map((event) => (
          <View key={event.id} style={styles.eventItem}>
            <Text>{event.title}</Text>
            <Text>Curtidas: {event.likes}</Text>
            <Button title="Curtir" onPress={() => handleLike(event.id)} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  eventList: {
    padding: 16,
  },
  eventItem: {
    marginBottom: 16,
  },
});

export default HomeScreen;