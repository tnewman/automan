/**
 * Copyright 2021 Thomas Newman. All rights reserved.
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

const VehicleAdd = () => (
  <FAB
    icon="plus"
    label="Add Vehicle"
    onPress={() => console.log('Test')}
    style={styles.fab}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default VehicleAdd;
