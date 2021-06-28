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
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import firebase from "../firebaseConnection";

const { width, height } = Dimensions.get("window");

const TelaLoginUser = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(true);

    const logar = async () => {
        if(email == ""){
            alert("O campo E-mail é obrigatório!");
            return;
        }
        if(password == ""){
            alert("O campo Senha é obrigatório!");
            return;
        }
        if(password.length < 6){
            alert("A senha não pode ter menos de 6 caracteres!");
            return;
        }

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
           alert("Bem-vindo: " + response.user.email);
           navigation.navigate("TelaInicial");
        })
        .catch((error) => {
            alert("Ops! Algo deu errado!");
            return;
        })

        setEmail("");
        setPassword("");
    }


    const irTelaCadastroUser = () => {
        navigation.navigate("TelaCadastroUser");
    }

    const changeVisibility = () => {
        setVisible(!visible)
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
                    <Text style={styles.header}>Login</Text>
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
                                               
                        <TouchableOpacity onPress={logar} style={styles.button}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                        <View style={styles.areaCriarConta}>
                            <Text style={styles.text}>Ainda não tem conta? </Text>
                            <TouchableOpacity 
                                onPress={irTelaCadastroUser}
                                style={styles.btnCriarConta}
                            >
                                <Text style={styles.txtCriarConta}>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
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
        marginVertical: 37,
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
        fontSize: 16,
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

export default TelaLoginUser;