import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";
import { validarEntradas } from "../../services/validarentradas";

export default function EntradaView({ visible, onClose, onSalvar }) {
    const [receita, setReceita] = useState("");
    const [despesa, setDespesa] = useState("");

    const handleSalvarDados = () => {
        try {
            validarEntradas(receita, despesa);
            onSalvar(parseFloat(receita), parseFloat(despesa));
            setReceita("");
            setDespesa("");
            onClose();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a receita"
                        value={receita}
                        onChangeText={setReceita}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a despesa"
                        value={despesa}
                        onChangeText={setDespesa}
                        keyboardType="numeric"
                    />
                    <Button title="Salvar" onPress={handleSalvarDados} />
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    closeButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'blue',
    },
});
