/**
 * Copyright 2021 Thomas Newman. All rights reserved.
 */

import {List} from 'react-native-paper';
import React from 'react';
import Vehicle from '../models/Vehicle';

interface VehicleItemProps {
  readonly vehicle: Vehicle;
}

const VehicleItem = (props: VehicleItemProps) => (
  <List.Item
    title={props.vehicle.name}
    left={() => <List.Icon icon="car" />}
    onPress={() => console.log('Test')}
  />
);

export default VehicleItem;
