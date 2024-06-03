import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../header/cabecalho";
import Balanco from "../../balanco/balanco";
import EntradaView from "../../view/entradadedados";
import GlobalButton from "../../view/botao";
import { calcularTotais } from "../../../services/validarentradas";
// import GlobalButton from "../../views/GlobalButton";

export default function Home() {
    const [receitaTotal, setReceitaTotal] = useState(0);
    const [despesaTotal, setDespesaTotal] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSalvarDados = (novaReceita, novaDespesa) => {
        setReceitaTotal(receitaTotal + novaReceita);
        setDespesaTotal(despesaTotal + novaDespesa);
    }

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Header name="Argos Maia" />
            <EntradaDados
                visible={modalVisible}
                onClose={handleCloseModal}
                onSalvar={handleSalvarDados}
            />
            <Balanco saldo={receitaTotal.toFixed(2)} despesas={despesaTotal.toFixed(2)} />
            <GlobalButton onPress={handleOpenModal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
    },
});
