import { FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from "../services/i18next";
import { useState } from 'react';
import languageList from "../services/languagesList.json"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const [visiable, setVisiable] = useState(false)
  
    const changeLng = (lng) => {
      i18next.changeLanguage(lng);
      setVisiable(false);
  
    }
    return (
      <View style={styles.container}>
        <Modal visible={visiable} onRequestClose={() => setVisiable(false)}>
          <View style={{ flex: 1, justifyContent: "center", padding: 10, backgroundColor: "red" }}>
            <FlatList
              data={Object.keys(languageResources)}
              renderItem={({ item }) => (
                <Pressable 
                  onPress={()=> changeLng(item)}
                  style={{ padding: 10, borderBottomColor: "green", borderBottomWidth: 2 }}>
                  <Text style={{ textAlign: "center" }}>
                    {languageList[item].nativeName}
                  </Text>
                </Pressable>
              )}
  
            />
          </View>
  
        </Modal>
        <Text>{t('welcome')}</Text>
        <Text>{t('try')}</Text>
  
  
        <Pressable
          onPress={() => setVisiable(true)}
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5
          }}>
          <Text
            style={{
              color: "white",
              textAlign: "center"
            }}>
            {t("change-language")}
          </Text>
        </Pressable>
        <TouchableOpacity  style={{marginTop:100,padding:10,backgroundColor:"red",alignItems:"center"}} onPress={() => navigation.navigate('FreeScreen')}>
            <Text>{t("tofree")}</Text>
        </TouchableOpacity>
  
        <StatusBar style="auto" />
      </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({})