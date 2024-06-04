import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";
import { validarEntradas } from "../services/validarentradas";

export default function EntradaView({ visible, onClose, onSalvar }) {
    const [receita, setReceita] = useState("");
    const [despesa, setDespesa] = useState("");
    const [opcaoSelecionada, setOpcaoSelecionada] = useState("receita");

    const lidarComOpcao = (opcao) => {
        setOpcaoSelecionada(opcao);
        onClose();
    };

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
          transparente={true}
          tipoAnimacao="slide"
          visible={visible}
          onRequestClose={onClose}
        >
          <View style={styles.containerModal}>
            <View style={styles.container}>
              <TouchableOpacity style={styles.opcao} onPress={() => lidarComOpcao("Receita")}>
                <Text style={styles.textoOpcao}>Receita</Text>
              </TouchableOpacity>
              <View style={styles.separador} />
              <TouchableOpacity style={styles.opcao} onPress={() => lidarComOpcao("Gastos")}>
                <Text style={styles.textoOpcao}>Gastos</Text>
              </TouchableOpacity>
              <View style={styles.separador} />
              <TouchableOpacity style={styles.opcao} onPress={() => lidarComOpcao("Cartão de Crédito")}>
                <Text style={styles.textoOpcao}>Cartão de Crédito</Text>
              </TouchableOpacity>
              <View style={styles.separador} />
    
              {opcaoSelecionada && ( // Renderize condicionalmente os campos de entrada com base na seleção
                <>
                  {/* <TextInput
                    style={styles.entrada}
                    placeholder="Digite o valor"
                    value={receita} // Supondo que "receita" seja para a opção selecionada
                    onChangeText={setReceita}
                    keyboardType="numeric"
                  />
                  <Button title="Salvar" onPress={handleSalvarDados} />
                */}
                </> 
              )}
    
              <TouchableOpacity onPress={onClose} style={styles.botaoFechar}>
                <Text style={styles.textoBotaoFechar}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      );
    }
    
    const styles = StyleSheet.create({
      containerModal: {
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
      opcao: {
        paddingVertical: 15,
        paddingHorizontal: 10,
      },
      textoOpcao: {
        fontSize: 16,
      },
      separador: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginVertical: 10,
      },
      entrada: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
      },
      botaoFechar: {
        marginTop: 10,
        alignItems: 'center',
      },
      textoBotaoFechar: {
        color: 'blue',
      },
    });