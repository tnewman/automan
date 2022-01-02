/**
 * Copyright 2021 Thomas Newman. All rights reserved.
 */

import React from 'react';
import VehicleAdd from '../components/VehicleAdd';
import VehicleList from '../components/VehicleList';

const testVehicles = [
  {
    name: '2012 Chevy Cruze',
  },
  {
    name: '2015 Chevy Trax',
  },
];

const VehiclesScreen = () => (
  <>
    <VehicleList vehicles={testVehicles} />
    <VehicleAdd />
  </>
);

export default VehiclesScreen;
