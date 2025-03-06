import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, IconButton } from "react-native-paper";

const EventCard = ({ event }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: event.image }} />
      <Card.Content>
        <Title>{event.title}</Title>
        <Paragraph>{event.date}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <IconButton
          icon={liked ? "heart" : "heart-outline"}
          color={liked ? "red" : "gray"}
          size={24}
          onPress={handleLike}
        />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  elevation: 4, // Sombra no Android
  },
});

export default EventCard;