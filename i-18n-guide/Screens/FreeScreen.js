import { StyleSheet, Text, View } from 'react-native'
import React, { useTransition } from 'react'
import i18next, { languageResources } from "../services/i18next";
import languageList from "../services/languagesList.json"
import { useTranslation } from 'react-i18next';

const FreeScreen = () => {
    const { t } = useTranslation();

    
    const changeLng = (lng) => {
        i18next.changeLanguage(lng);
        setVisiable(false);
    
      }

  return (
    <View>
       <Text>{t('welcome')}</Text>
       <Text>{t('try')}</Text>
    </View>
  )
}

export default FreeScreen

const styles = StyleSheet.create({})