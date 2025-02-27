import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { NavbarProps } from "../types/props/NavbarProps";

export default function Navbar({title, imageUri, children}: NavbarProps) {
    const router = useRouter();

    return(
        <View className="flex-row justify-between items-center bg-blue-500 p-4">
            <TouchableOpacity onPress={() => router.push("/menu")}>  {/* Menu */}
                <Ionicons name="menu" size={28} color="white"></Ionicons>
            </TouchableOpacity>

            <View className="flex-1 items-center">
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                ) : title ? (
                    <Text className="text-white text-lg font-bold">{title}</Text>
                ) : (
          children
        )}
      </View>
        </View>
    )
}