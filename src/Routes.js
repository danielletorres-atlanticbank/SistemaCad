import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial        from "./TelaInicial";
import TelaCadastro       from "./TelaCadastro";
import TelaOpcoes         from "./TelaOpcoes";


const Stack = createStackNavigator();


const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="TelaInicial"
                    component={TelaInicial}
                    options={{
                        title: false,
                        headerShown: false
                    }}
                />

                <Stack.Screen 
                    name="TelaCadastro"
                    component={TelaCadastro}
                    options={{
                        title: false,
                        headerShown: false
                    }}
                />

                <Stack.Screen 
                    name="TelaOpcoes"
                    component={TelaOpcoes}
                    options={{
                        title: false,
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
      
    );
}

export default Routes;