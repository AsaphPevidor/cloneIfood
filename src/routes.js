import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//vscode sugere o createNativeStack...
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Pages/Home/Index";
import Main from "./Pages/main";

const Stack = createStackNavigator();

const screenOpitions = {
    headerShown : false
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOpitions={screenOpitions}>
                <Stack.Screen name="Home" component={Home} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}//stack fica na parte de cima da tela

export default Routes;