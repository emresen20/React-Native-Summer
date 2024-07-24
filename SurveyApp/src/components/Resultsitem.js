import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const Resultsitem = ({ item, total }) => {
  if (!item || !item.answers_aggregate || !item.answers_aggregate.aggregate) {
    return null; // Eğer item veya ilgili veri eksikse bileşeni render etmeyin
  }

  const count = item.answers_aggregate.aggregate.count;
  const safeTotal = total || 1; // total değeri boşsa 1 olarak varsayalım

  // Güvenli yüzde hesaplama
  const percentage = (count * 100) / safeTotal;
  const progress = percentage / 100;

  return (
    <View style={styles.container}>
      <Text>
        {item.text} ({percentage.toFixed(1)}%)
        {" - "}
        {count}
      </Text>
      <Progress.Bar
        progress={progress}
        width={300}
        height={18}
        style={styles.progress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  progress: {
    marginTop: 5,
  },
});

export default Resultsitem;
