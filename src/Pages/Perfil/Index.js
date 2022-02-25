import { StatusBar } from 'expo-status-bar';
import React from "react";
import {SadeAreaView, Image, View, ButtonContainer} from "./style";
import {Text} from "react-native";

import banner from "../../../assets/img/banner.jpg";
import Button from "../../components/button";

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <Text>PERFIL</Text>
      </SafeAreaView>
      </>
  );
}