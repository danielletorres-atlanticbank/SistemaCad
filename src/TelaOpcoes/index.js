import React, { useState, useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    StatusBar,
    FlatList,
    ScrollView,
    ActivityIndicator
} from 'react-native';
//import firebase from "../firebaseConnection";
import TelaLista from "../TelaLista";

const { width, height } = Dimensions.get("window");

const TelaOpcoes = ({route}) => {

    const [checked, setChecked] = useState(0);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [anoSelecionado, setAnoSelecionado] = useState(null);
    const [nomeGerente, setNomeGerente] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const [sistemacad, setSistemacad] = useState([]); 

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // async function dados(){
        //     await firebase.database().ref("sistemacad").on("value", (snapshot) => {

        //         setSistemacad([]);

        //         snapshot.forEach((childItem) => {
        //             let data = {
        //                 key: childItem.key,
        //                 nomeGerente: childItem.val().gerente,
        //                 titulo: childItem.val().titulo,
        //                 descricao: childItem.val().descricao,
        //                 selectedId: childItem.val().ano,
        //                 checked: childItem.val().status
        //             };
                
        //             setSistemacad(oldArray => [...oldArray, data].reverse());
        //         })
                
        //         setLoading(false);
        //     })
        // }

        // dados();
    }, [])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <StatusBar
                barStyle="light-content" 
                backgroundColor="#DB915C"
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{width: width}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Parabéns por escolher nossa plataforma!</Text>
                        <Text style={styles.text}>Agora vamos listar todos os projetos cadastrados...</Text>
                        <View style={styles.btnContainer}>
                            {loading ? 
                                (
                                    <ActivityIndicator 
                                        color="#3742D4"
                                        size={45}
                                        marginTop={150}
                                    />
                                )
                            :
                                (
                                    <FlatList 
                                        keyExtractor={item => item.key}
                                        data={sistemacad}
                                        renderItem={({item}) => (<TelaLista data={item}/>)}
                                    />
                                )            
                            }            
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around",
    },
    header: {
        fontSize: 36,
        color: "#3742D4",
        marginVertical: 25
    },
    btnContainer: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    text1: {
        fontSize: 20, 
        color: "#DB915C"
    },
    text: {
        fontSize: 23,
        color: "#3742D4",
        marginVertical: 25
    },
    descric: {
        color: "#000", 
        fontSize: 16
    },
    viewDescric: {
        flexDirection:"row", 
        width: width * 0.8, 
        justifyContent:"center", 
        alignItems:"center"
    }
});

export default TelaOpcoes;