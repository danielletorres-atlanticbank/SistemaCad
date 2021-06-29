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
    TextInput
} from 'react-native';
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
//import firebase from "../firebaseConnection";


const { width, height } = Dimensions.get("window");

const TelaCadastroUser = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(true);

    // const cadastrar = async () => {
    //     if(email == ""){
    //         alert("O campo E-mail é obroigatório!");
    //         return;
    //     }
    //     if(password == ""){
    //         alert("O campo Senha é obrigatório!");
    //         return;
    //     }
    //     await firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then((response) => {
    //         alert("Usuário criado: " + response.user.email);
    //     })
    //     .catch((error) => {
    //         if(error.code === "auth/weak-password"){
    //             alert("Sua senha deve ter pelo menor 6 caracteres!");
    //             return;
    //         }
    //         if(error.code === "auth/invalid-email"){
    //             alert("E-mail inválido!");
    //             return;
    //         } else{
    //             alert("Ops! Algo deu errado!");
    //             return;
    //         }
    //     })

    //     setEmail("");
    //     setPassword("");

    //     navigation.navigate("TelaInicial");
    // }
    
    const changeVisibility = () => {
        setVisible(!visible);
    } 

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
                    <Text style={styles.header}>Cadastro</Text>
                    <View style={styles.btnContainer}>
                        <Text style={styles.campo}>E-mail</Text>
                        <TextInput
                            placeholder="nome@email.com"
                            maxLength={30}
                            style={styles.input}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                        <View style={{flexDirection:"row", justifyContent:"space-around", marginLeft: 6, marginTop: 8}}>
                            <Text style={styles.campo}>Senha</Text>
                            <TouchableOpacity onPress={changeVisibility}>
                                {
                                    visible ? 
                                        (
                                            <Icon
                                                name="eye-off"
                                                type="feather"
                                                color="#3742D4"
                                                style={{marginRight:16}}
                                            />
                                        )
                                    :
                                        (
                                            <Icon
                                                name="eye"
                                                type="feather"
                                                color="#3742D4"
                                                style={{marginRight:16}}
                                            />           
                                        )
                                }
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            secureTextEntry={visible}
                            placeholder="123456"
                            maxLength={30}
                            style={styles.input}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                        <TouchableOpacity onPress={cadastrar} style={styles.button}>
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
        marginVertical: 10,
        marginBottom: 20    
    },
    textButton: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    },
    areaCriarConta: {
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    text: {
        fontSize: 16
    },
    btnCriarConta: {
        backgroundColor: "#DB915C",
        borderRadius: 3,
        width: 123,
        height: 30,
        justifyContent:"center",
        alignItems:"center"
    },
    txtCriarConta: {
        color: "#fff",
        fontSize: 16,
        fontWeight:"bold"
    },
    campo: {
        marginRight: width * 0.75, 
        color: "#3742D4", 
        fontWeight: "bold"
    }
});

export default TelaCadastroUser;