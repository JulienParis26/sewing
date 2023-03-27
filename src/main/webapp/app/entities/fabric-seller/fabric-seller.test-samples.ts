import { IFabricSeller, NewFabricSeller } from './fabric-seller.model';

export const sampleWithRequiredData: IFabricSeller = {
  id: 3151,
  name: 'Saint holistic',
};

export const sampleWithPartialData: IFabricSeller = {
  id: 52914,
  name: 'Baby',
  webSite: 'Agent dynamic Road',
};

export const sampleWithFullData: IFabricSeller = {
  id: 44352,
  name: 'initiatives indexing',
  webSite: 'Quality',
  description: 'Future',
};

export const sampleWithNewData: NewFabricSeller = {
  name: 'Borders Tools Mississippi',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
