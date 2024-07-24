import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { gql, useQuery, useSubscription } from '@apollo/client'
import { GET_QUESTIONS_Subscription } from './queries';
import Loading from '../components/Loading';
import { useNavigation } from '@react-navigation/native';
import EmptyList from '../components/EmptyList';
import { MaterialIcons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import { auth } from '../auth';

const Questions = () => {
  const navigation = useNavigation()

  const { data, loading, error } = useSubscription(GET_QUESTIONS_Subscription);
  console.log("data", data)
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Text>{JSON.stringify(error)}</Text>
  }
  if (data && data.questions) {
    return (
      <>
        {data.questions.map((question, index) => (
          <Swipeable
            key={index}
            renderRightActions={(progress, dragX) => (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  if (auth.currentUser.uid === question.user_id) {
                    console.warn("Silinecek:", question.id);
                  } else {
                    alert("Bu size ait değil");
                  }
                }}
              >
                <MaterialIcons name="delete" size={24} color="white" />
              </TouchableOpacity>
            )}
          >
            <View style={styles.questionContainer}>
              <TouchableOpacity
                style={styles.questionButton}
                onPress={() => navigation.navigate("Detail", { id: question.id })}
              >
                <Text style={styles.questionText}>{question.text}</Text>
              </TouchableOpacity>
            </View>
          </Swipeable>
        ))}
      </>
    );
  }
  else {
    return <EmptyList message={"No surveys yet"} />
  }

  return null;
}

export default Questions

const styles = StyleSheet.create({
  questionContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "green",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  questionButton: {
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
    padding: 10,
  },
  questionText: {
    textAlign: "center",
    alignSelf: "center"
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '100%',
  },
})