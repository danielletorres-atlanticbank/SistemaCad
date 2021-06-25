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
    FlatList
} from 'react-native';
import firebase from "../firebaseConnection";

const { width, height } = Dimensions.get("window");

const TelaLista = ({data}) => {

    const [checked, setChecked] = useState(0);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [anoSelecionado, setAnoSelecionado] = useState(null);
    const [nomeGerente, setNomeGerente] = useState("");

    const [selectedId, setSelectedId] = useState(null);

    const [sistemacad, setSistemacad] = useState([]); 

    return (
        <View style={styles.container}>          
            <View style={styles.viewDescric}>  
                <Text style={styles.descric}>Título: </Text>
                <Text style={styles.text1}>{data.titulo}</Text>
            </View>
            <View style={styles.viewDescric}>  
                <Text style={styles.descric}>Descrição: </Text>
                <Text style={styles.text1}>{data.descricao}</Text>
            </View>
            <View style={styles.viewDescric}>  
                <Text style={styles.descric}>Ano: </Text>
                <Text style={styles.text1}>{data.selectedId}</Text>
            </View>
            <View style={styles.viewDescric}>  
                <Text style={styles.descric}>Status: </Text>
                <Text style={styles.text1}>{data.checked}</Text>
            </View>
            <View style={styles.viewDescric}>  
                <Text style={styles.descric}>Gerente responsável: </Text>
                <Text style={styles.text1}>{data.nomeGerente}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DB915C44",
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        width: width * 0.88
        //marginLeft: -100
    },
    text1: {
        fontSize: 20, 
        color: "#DB915C",
        width: height > 640 ? width * 0.6: width * 0.3 
    },
    descric: {
        color: "#000", 
        fontSize: 16
    },
    viewDescric: {
        flexDirection:"row", 
        justifyContent:"flex-start", 
        alignItems:"center"
    }
});

export default TelaLista;