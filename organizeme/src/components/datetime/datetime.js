import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dias() {

    const hoje = new Date();
        const opcoes = { 
            weekday: 'short', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        };
    const dataAtual = hoje.toLocaleDateString('pt-BR', opcoes);

    return (
        <View style={styles.container}>
            <Text style={styles.data}>{dataAtual}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: -30,
    },
    data: {
        fontSize: 12,
        fontWeight: "bold",
        // Alterar a cor do texto para meio roxo claro, meio cinza
        color: "#6A0DAD",
    },
});