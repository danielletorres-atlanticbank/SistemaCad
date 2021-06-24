import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    TouchableOpacity,
    Keyboard,
    Dimensions,
    StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const TelaInicial = () => {

    const navigation = useNavigation();

    const irTelaCadastro = () => {
        navigation.navigate("TelaCadastro");
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
                    <Text style={styles.header}>Cadastrar Projetos</Text>
                    <Text style={styles.text}>Aqui você pode acompanhar o andamento dos seus projetos onde e quando quiser!</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={irTelaCadastro} style={styles.button}>
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
        backgroundColor: "#DB915C"
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        color: "#fff"
    },
    text: {
        fontSize: 20,
        color: "#fff",
        marginTop: -160,
        width: width * 0.8
    },
    btnContainer: {
        backgroundColor: "#DB915C"
    },
    button: {
        width:  width * 0.882,
        height: height * 0.05,
        backgroundColor: "#3742D4",
        borderRadius: 5,
        justifyContent: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    }
});

export default TelaInicial;