import React from "react";
import { StyleSheet, View } from "react-native";

export default function BarraNavegacao() {
    /**
     * Navigation Bar com as seguintes funcionalidades:
     * 1. Adicione um botão de voltar para a tela anterior (EntradaView)
     * 2. Nome "Nova Receita"
     * 3. Botão com a função de salvar a receita (return da receita para aparecer em Home)
    */

    const salvarReceita = async () => {
        try{
            const receita = {
            };
        } catch (error) {
            alert(error.message);
        }
        alert("Receita salva com sucesso!");
    }
    return (
        <View style={styles.container}>
          {/* Botão de voltar */}
          <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
            <Text style={styles.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
    
          {/* Título da tela */}
          <Text style={styles.tituloTela}>Nova Receita</Text>
    
          {/* Botão de salvar */}
          <TouchableOpacity style={styles.botaoSalvar} onPress={() => salvarReceita()}>
            <Text style={styles.textoBotaoSalvar}>Salvar</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#fff",
    },
    botaoVoltar: {
      padding: 10,
    },
    textoBotaoVoltar: {
      fontSize: 16,
      fontWeight: "bold",
    },
    tituloTela: {
      fontSize: 18,
      fontWeight: "bold",
    },
    botaoSalvar: {
      padding: 10,
    },
    textoBotaoSalvar: {
      fontSize: 16,
      fontWeight: "bold",
      color: "blue",
    },
  });