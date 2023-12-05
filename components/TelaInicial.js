import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export default function TelaInicial() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  //////////////////////////////////////////////////////////// Banco de Dados

  const url = "https://objetivos-api.vercel.app/Objetivos/";
  const [objs, setObjs] = useState([]);

  function buscarObjetivos() {
    fetch(url)
      .then((respFetch) => respFetch.json())
      .then((respJson) => setObjs(respJson))
      .catch((erro) => console.warn(erro));
    console.log("passou no getObjetivos", objs);

    for (let obj of objs) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        //{ text: obj.objetivo, id: obj.id },
        { text: obj.objetivo, id: Math.random().toString() },
      ]);
    }
  }

  function gravarDados(enteredGoalText) {
    console.log("a gravar dados");
    axios
      .post(url, {
        objetivo: enteredGoalText,
      })
      .catch((erro) => console.log(erro));
  }

  function apagarDados(cod) {
    axios.delete(url + cod).catch((erro) => console.log(erro));
  }

  ////////////////////////////////////////////////////////////// Lista Local

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    gravarDados(enteredGoalText);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    //apagarDados(id)
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  //////////////////////////////////////////////////////////////

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.button}>
          <Button
            title="Novo Objetivo"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>
        <View style={styles.button}>  
          <Button 
            title="Importar" 
            color="#5e0acc" 
            onPress={buscarObjetivos} />
        </View>

        <GoalInput
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 20,
  },
  button: {
    paddingTop: 10,
  }
});
