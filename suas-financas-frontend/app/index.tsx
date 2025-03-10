import React from "react";
import { View, Text } from "react-native";
import Navbar from "../components/app/Navbar";

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Navbar title="Minha Finança" />
        </View>
    )
}