import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { NavbarProps } from "../../types/props/NavbarProps";

export default function Navbar({ title, imageUri, children }: NavbarProps) {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      {/* Ícone de menu */}
      <TouchableOpacity onPress={() => router.push("/menu")}>
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>

      {/* Conteúdo dinâmico (Título, Imagem ou Children) */}
      <View style={styles.centerContent}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : title ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          children
        )}
      </View>

      {/* Ícone de perfil */}
      <TouchableOpacity onPress={() => router.push("/perfil")}>
        <Ionicons name="person-circle" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6B21A8", // Roxo escuro
    padding: 16,
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
