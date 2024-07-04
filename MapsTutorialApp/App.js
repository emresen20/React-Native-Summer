import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapStyle from './MapStyle';

export default function App() {
  // Markerları saklamak için useState hook'u kullanılıyor
  let [markers, setMarkers] = useState([
    {
      lat: 37.778690,
      long: 29.061660,
    },
  ]);

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        customMapStyle={MapStyle} // Harita stilini belirlemek için
        provider={PROVIDER_GOOGLE} // Google harita sağlayıcısı kullanılıyor
        onPress={(e) =>
          setMarkers([...markers,
          { lat: e.nativeEvent.coordinate.latitude, long: e.nativeEvent.coordinate.longitude }])}

      >
        {/* Markerları haritaya eklemek için markers array'i map ile döngüye sokuluyor */}
        {markers.map((e, i) => (
          <Marker key={i} pinColor='Yellow' coordinate={{ latitude: e.lat, longitude: e.long }} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
