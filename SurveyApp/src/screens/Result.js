import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useMutation, useSubscription } from '@apollo/client';
import { RESULTS_SUBSCRIPTION } from './queriesdetail';
import Loading from '../components/Loading';
import Resultsitem from '../components/Resultsitem';
import { DELETE_QUESTION_MUTATION, DELETE_ANSWERS_MUTATION } from '../Questions/queries';
import { auth } from '../auth';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Result = ({ id, user_id }) => {
  const navigation = useNavigation();

  const [deleteAnswers] = useMutation(DELETE_ANSWERS_MUTATION);
  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION);

  const handleDelete = async () => {
    try {
      // Önce cevapları sil
      await deleteAnswers({ variables: { question_id: id } });

      // Ardından soruyu sil
      await deleteQuestion({ variables: { id } });

      alert('Silindi');
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Silme işlemi sırasında hata:', error);
      alert('Silme işlemi sırasında bir hata oluştu.');
    }
  };

  const { loading, data } = useSubscription(RESULTS_SUBSCRIPTION, {
    variables: { id },
  });

  if (loading) {
    return <Loading />;
  }

  if (!data || !data.questions_by_pk) {
    console.warn('Data veya data.questions_by_pk boş');
    return null;
  }

  const { options } = data.questions_by_pk;

  if (!options || !Array.isArray(options)) {
    console.warn('Options beklenen formatta değil');
    return null;
  }

  const total = options.reduce(
    (total, item) => total + (item.answers_aggregate?.aggregate?.count || 0), 0
  );

  return (
    <View>
      {options.map((item) => (
        <Resultsitem key={item.id} item={item} total={total} />
      ))}

      <Pressable
      style={{marginTop:20,alignSelf:"center"}}
        onPress={() => {
          if (auth.currentUser.uid === user_id) {
            handleDelete();
          } else {
            alert('Bu size ait değil');
          }
        }}
      >
        <MaterialIcons name="delete" size={50} color="red" />
      </Pressable>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
