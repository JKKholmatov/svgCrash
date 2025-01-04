import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  DriverProfile,
} from "../../../src/StateStore";
import StartIconSvg from "../../../assets/icon/Passenger/StartIconSvg.svg";
import FinishIconSvg from "../../../assets/icon/Passenger/FinishIconSvg.svg";

const GoogleMap = () => {
  const latitudeDelta = 0.013;
  const longitudeDelta = 0.013;
  const currentOrder = DriverProfile.useState((s) => s.currentOrder);
  const orderStart = JSON.parse(currentOrder.start);
  const orderFinish = JSON.parse(currentOrder.finish);

  return (
    <View style={styles.container}>
      <MapView
        mapType={"standard"}
        showsCompass={false}
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: orderStart.latitude,
          longitude: orderStart.longitude,
          latitudeDelta,
          longitudeDelta,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          tracksViewChanges={false}
          coordinate={orderStart}
          style={{ width: 60, height: 75 }}
          title="Start"
        >
          <StartIconSvg />
        </Marker>
     
        <Marker
          tracksViewChanges={false}
          style={{ width: 60, height: 75 }}
          coordinate={orderFinish}
          title="Finish"
        >
          <FinishIconSvg />
        </Marker>
      </MapView>
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
