import React, { useState } from 'react';
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
    TextInput
} from 'react-native';
import { RadioButton } from 'react-native-paper';

const { width, height } = Dimensions.get("window");

const TelaCadastro = () => {

    const [checked, setChecked] = useState();

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState();
    const [status, setStatus] = useState("");
    const [nomeGerente, setNomeGerente] = useState("");


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
                            style={styles.input}
                            onChangeText={(text) => setTitulo(text)}
                            value={titulo}
                        />
                        <TextInput
                            placeholder="Descrição"
                            style={styles.input}
                            onChangeText={(text) => setDescricao(text)}
                            value={descricao}
                        />
                        <TextInput
                            placeholder="Ano"
                            keyboardType="numeric"
                            style={styles.input}
                            onChangeText={(text) => setAno(text)}
                            value={ano}
                        />
                        <View style={styles.areaRadio}>
                            <View style={styles.areaRadio}>
                                <RadioButton
                                color="#DB915C"
                                    value="first"
                                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('first')}
                                />
                                <Text>A fazer</Text>
                    
                            </View>
                            <View style={styles.areaRadio}>
                                <RadioButton
                                    color="#DB915C"
                                    value="second"
                                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('second')}
                                />
                                <Text>Fazendo</Text>
                            </View>
                            <View style={styles.areaRadio}>
                                <RadioButton
                                    color="#DB915C"
                                    value="third"
                                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('third')}
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
                        
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Cadastrar</Text>
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
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        color: "#3742D4",
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
    areaRadioPrincipal: {

    },
    areaRadio: {
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center",
        marginHorizontal: 10
    }
});

export default TelaCadastro;