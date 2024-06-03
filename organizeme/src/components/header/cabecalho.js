import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}) {
    return (
        <View style={styles.container}>
            <View style={styles.statusBarContainer}>
                <View style={styles.content}>
                    <Text style={styles.username}>{name}</Text>
                    <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                        <Feather name="user" size={27} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBarContainer: {
        backgroundColor: '#6A0DAD', // Roxo
        paddingTop: StatusBarHeight,
        paddingHorizontal: 16,
        paddingBottom: 80,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        fontSize: 20,
        color: '#FFF', // Mudar a cor do texto para branco para contraste
        fontWeight: "bold",
    },
    buttonUser: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});