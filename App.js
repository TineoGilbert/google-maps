import React, { useState } from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { StyleSheet, Text, View } from 'react-native';
const img = require('./assets/image/taxi.png')
const hospital = require('./assets/image/hospital.png')

import {GOOGLE_MAPS_KEY_GILBERT} from '@env'

export default function App() {

  const [origin, setOrigin] = useState({
    latitude: 18.47008368136006,
    longitude: -69.93915650057929,
  });


  const [destination, setDestination] = useState({
    latitude: 18.526357167456382,
    longitude: -70.05362866790703,
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        
      }}
      >

        <Marker coordinate={origin}
         draggable
         onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
         image={img}
        />

        <MapViewDirections
         origin={origin}
         destination={destination}
         apikey={GOOGLE_MAPS_KEY_GILBERT}
         strokeWidth={3}
         strokeColor='#201E43'
        />

        <Marker coordinate={destination} image={hospital}/>
        

{/*         
        <Polyline
         coordinates={[origin, destination]}
         strokeColor='#FF8A8A'
         strokeWidth={3}
        /> */}
        
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    width: '100%',
    height: '100%'
  }
});
