/**
 * Copyright 2021 Thomas Newman. All rights reserved.
 */

import React from 'react';
import {ScrollView} from 'react-native';
import Vehicle from '../models/Vehicle';
import VehicleItem from './VehicleItem';

interface VehicleListProps {
  readonly vehicles: Vehicle[];
}

const VehicleList = (props: VehicleListProps) => {
  const vehicleItems = props.vehicles.map(vehicle => (
    <VehicleItem key={vehicle.name} vehicle={vehicle} />
  ));

  return <ScrollView>{vehicleItems}</ScrollView>;
};

export default VehicleList;
