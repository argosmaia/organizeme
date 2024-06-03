import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Dias from "../datetime/datetime";

export default function Balanco({ saldo, despesas }) {
    return (
        <View style={styles.container}>
            <Text> {<Dias />}</Text>
            <View style={styles.item}>            
                <View style={styles.column}>
                    <Text style={styles.title}>Receita</Text>
                    <View style={styles.conteudo}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.ganhos}>{saldo}</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <Text style={styles.title}>Gastos</Text>
                    <View style={styles.conteudo}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.gastos}>{despesas}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 18,
        marginTop: -24,
        marginHorizontal: 16,
        borderRadius: 4,
        zIndex: 99,
        position: "absolute",
        top: StatusBar.currentHeight + 110, // Ajuste para sobreposição adequada
        left: 0,
        right: 0,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    column: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
    },
    conteudo: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    currencySymbol: {
        fontSize: 14,
        color: "#DADADA",
        marginRight: 6,
        fontWeight: "bold",
    },
    ganhos: {
        fontSize: 20,
        color: "#2ECC71",
        fontWeight: "bold",
    },
    gastos: {
        fontSize: 20,
        color: "#FF4757",
        fontWeight: "bold",
    },
});
