import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Assumindo que você está usando expo

const GlobalButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#6200ee',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});

export default GlobalButton;
