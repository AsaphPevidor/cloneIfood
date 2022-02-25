import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {SadeAreaView, Image, View, ButtonContainer} from "./Style";
import {Text} from "react-native";
import banner from "../../../assets/img/banner.png";
import Button from "../../components/button";

export default function Home() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tao facil</Text>
          <Image src={banner} />
          <Text>Permitir localização</Text>
          <Text>Descobrir restaurantes que entregam em sua regiao</Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => {} }/>
          <Button text="ENTRAR" theme="primary"/>
        </ButtonContainer>
      </SafeAreaView>
      </>
  );
}
