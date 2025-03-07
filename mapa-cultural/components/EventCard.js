import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, IconButton } from "react-native-paper";

const EventCard = ({ event }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  // Formata a data no padrão brasileiro
  const formatDate = (dateString) => {
    if (!dateString) return "Data indisponível"; // Verificação de segurança
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Verificação de segurança para o objeto `event`
  if (!event) {
    return null; // Ou exiba uma mensagem de erro/fallback
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate("EventDetails", { event })}>
    <Card style={styles.card}>
      <Card.Cover source={{ uri: event.image || "https://picsum.photos/300/200" }} /> {/* Fallback para imagem */}
      <Card.Content>
        <Title>{event.title || "Título indisponível"}</Title> {/* Fallback para título */}
        <Paragraph>{formatDate(event.date)}</Paragraph>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    elevation: 4,
  },
});

export default EventCard;