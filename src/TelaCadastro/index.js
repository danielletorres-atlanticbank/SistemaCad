import React, { useState, useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    Dimensions,
    StatusBar,
    TextInput,
    FlatList
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from "../firebaseConnection";

const { width, height } = Dimensions.get("window");

const DATA = [
    {
        id: '2010',
        ano: 2010
    },
    {
        id: '2011',
        ano: 2011
    },
    {
        id: '2012',
        ano: 2012
    },
    {
        id: '2013',
        ano: 2013
    }
    ,
    {
        id: '2014',
        ano: 2014
    },
    {
        id: '2015',
        ano: 2015
    },
    {
        id: '2016',
        ano: 2016
    },
    {
        id: '2017',
        ano: 2017
    },
    {
        id: '2018',
        ano: 2018
    },
    {
        id: '2019',
        ano: 2019
    },
    {
        id: '2020',
        ano: 2020
    },
    {
        id: '2021',
        ano: 2021
    }
]

const Item = ({ item, onPress, backgroundColor }) => (
    <View style={{flex: 1, marginVertical: 10}}>
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={{color: "#fff"}}>{item.ano}</Text>
        </TouchableOpacity>
    </View>
);

console.disableYellowBox=true;

const TelaCadastro = () => {

    const navigation = useNavigation();

    const [checked, setChecked] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [anoSelecionado, setAnoSelecionado] = useState(null);
    const [nomeGerente, setNomeGerente] = useState("");

    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? "#3742D4" : "#DB915C";
        
        return(
            <Item 
                item={item}
                onPress={() => 
                    setSelectedId(item.id)
                }
                backgroundColor={{ backgroundColor }}
            />
        );
    }


    const cadastrar = async () => {
        if(titulo == ''){
            alert("Preencha o campo título!");
            return;
        }
        if(descricao == ''){
            alert("Preencha o campo descrição!");
            return;
        }
        if(selectedId == null){
            alert("Preencha o campo ano!");
            return;
        }
        if(checked == null){
            alert("Selecione um status para o projeto!");
            return;
        }
        if(nomeGerente ==  ''){
            alert("Preencha o campo do gerente responsável!");
            return;
        }

        let sistemacad = await firebase.database().ref("sistemacad");
        let chave = sistemacad.push().key;

        sistemacad.child(chave).set({
            ano: selectedId,
            descricao: descricao,
            gerente: nomeGerente,
            status: checked,
            titulo: titulo            
        })

        alert("Cadastrado com sucesso!");
        setTitulo("");
        setDescricao("");
        setSelectedId(null);
        setChecked(0);        
        setNomeGerente("");

    }    

    const irTelaOpcoes = () => {
        navigation.navigate("TelaOpcoes")
    }

    useEffect(() => {
        async function dados(){
            // .on é olheiro da nossa database, fica o tempo todo verificando se o dado mudou
            // await firebase.database().ref("nome").on("value", (snapshot) => {
            //     setNome(snapshot.val());
            // })

            // .once é olheiro da nossa database, verifica só uma vez após cada reload
            // await firebase.database().ref("sistemacad/2").once("value", (snapshot) => {
            //     setNome(snapshot.val().descricao);
            //     setTituloData(snapshot.val().titulo);
            // })

            // await firebase.database().ref("sistemacad").child(3).set({
            //     ano: 2021,
            //     descricao: "Sistema de compras",
            //     gerente: "Amanda",
            //     status: "A fazer",
            //     titulo: "SystemLab"
            // })
        }
        dados();
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Cadastrar Projetos</Text>
                    <View style={styles.btnContainer}>
                        <TextInput
                            placeholder="Título"
                            maxLength={30}
                            style={styles.input}
                            onChangeText={(text) => setTitulo(text)}
                            value={titulo}
                        />
                        <TextInput
                            placeholder="Descrição"
                            maxLength={30}
                            style={styles.input}
                            onChangeText={(text) => setDescricao(text)}
                            value={descricao}
                        />
                        <FlatList 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={DATA}
                            renderItem={renderItem}
                        />
                        <View style={styles.areaRadio}>
                            <View style={styles.areaRadio}>
                                <RadioButton
                                    color="#DB915C"
                                    value="A fazer"
                                    status={ checked === 'A fazer' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('A fazer')}
                                />
                                <Text>A fazer</Text>
                    
                            </View>
                            <View style={styles.areaRadio}>
                                <RadioButton
                                    color="#DB915C"
                                    value="Fazendo"
                                    status={ checked === 'Fazendo' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('Fazendo')}
                                />
                                <Text>Fazendo</Text>
                            </View>
                            <View style={styles.areaRadio}>
                                <RadioButton
                                    color="#DB915C"
                                    value="Concluído"
                                    status={ checked === 'Concluído' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('Concluído')}
                                />
                                <Text>Concluído</Text>
                            </View>
                        </View>
                        <TextInput
                            placeholder="Gerente de projetos responsável"
                            placeholderTextColor="#ccc"
                            style={styles.input}
                            onChangeText={(text) => setNomeGerente(text)}
                            value={nomeGerente}
                        />
                        
                        <TouchableOpacity onPress={cadastrar} style={styles.button}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={irTelaOpcoes} style={styles.button}>
                            <Text style={styles.textButton}>Listar cadastros</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        justifyContent: "space-evenly"
    },
    header: {
        fontSize: 36,
        color: "#3742D4",
        marginVertical: 10
    },
    input: {
        width:  width * 0.882,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#DB915C",
        borderRadius: 5 ,
        justifyContent: "center",
        alignItems: "center",
        color:"#000"
    },
    btnContainer: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width:  width * 0.882,
        height: height * 0.05,
        backgroundColor: "#3742D4",
        borderRadius: 5,
        justifyContent: "center",
        marginVertical: 10
    },
    textButton: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    },
    areaRadio: {
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center",
        marginHorizontal: 10
    },
    item: {
        marginHorizontal: 5, 
        width: 60, 
        height: 30, 
        borderRadius: 5, 
        justifyContent: "center", 
        alignItems: "center"
    }
});

export default TelaCadastro;