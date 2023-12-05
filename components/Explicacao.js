import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Explicacao() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.texto}>
        {" "}
        Este aplicativo serve para armazenar uma lista de objetivos. Ao clicar
        no botão "Novo Objetivo", um modal será exibido juntamente com um campo
        de Imput para que o usuário escreva um objetivo.
      </Text>

      <Button title="Novo Objetivo" color="#5e0acc" />

      <Text style={styles.texto}>
        Ao clicar em "Add Goal", seu objetivo será adicionado a uma lista e
        grava em um banco de dados{" "}
      </Text>

      <Button title="Add Goal" color={"#5e0acc"} />

      <Text style={styles.texto}>
        Para excluir um objetivo, basta apenas clicar sobre ele.
      </Text>
      <Text style={styles.texto}>
        O banco de dados fora projetado com uma tabela de Objetivos contendo um
        campo de Id e um campo "Objetivo" de varchar(40) para armazenar o
        objetivo em questão{" "}
      </Text>
      <Text style={styles.texto}>
        A API foi desenvolvida para aceitar comandos CRUD. No momento, ainda não é possível excluir objetivos de nosso banco de dados, aguarde atualizações futuras.
      </Text>
      <Image source={require('../assets/images/saboMuito.jpg')} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  texto: {
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "justify",
  },
  imagem: {
    resizeMode: "stretch",
    padding: 10,
    width:380,
    height:270,

  }
});
