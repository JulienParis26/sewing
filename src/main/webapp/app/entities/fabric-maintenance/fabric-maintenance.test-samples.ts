import { IFabricMaintenance, NewFabricMaintenance } from './fabric-maintenance.model';

export const sampleWithRequiredData: IFabricMaintenance = {
  id: 9321,
  name: 'compress Gloves morph',
  code: 'engineer program Central',
};

export const sampleWithPartialData: IFabricMaintenance = {
  id: 86710,
  name: 'Marshall',
  code: 'Technician Assistant local',
};

export const sampleWithFullData: IFabricMaintenance = {
  id: 73455,
  name: 'Outdoors',
  code: 'Games portals world-class',
};

export const sampleWithNewData: NewFabricMaintenance = {
  name: 'Garden',
  code: 'payment panel magnetic',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
