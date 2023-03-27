import dayjs from 'dayjs/esm';

import { IProject, NewProject } from './project.model';

export const sampleWithRequiredData: IProject = {
  id: 55962,
};

export const sampleWithPartialData: IProject = {
  id: 60153,
  name: 'Awesome users',
  ref: 'Communications Implemented dot-com',
  creationDate: dayjs('2023-03-20'),
  haberdasheryUse: 'Centers',
  image3: '../fake-data/blob/hipster.png',
  image3ContentType: 'unknown',
  image4: '../fake-data/blob/hipster.png',
  image4ContentType: 'unknown',
};

export const sampleWithFullData: IProject = {
  id: 93107,
  name: 'state',
  ref: 'Loan Avon',
  creationDate: dayjs('2023-03-19'),
  haberdasheryUse: 'indexing',
  accessoryUse: 'Niger (Slovak mindshare',
  image1: '../fake-data/blob/hipster.png',
  image1ContentType: 'unknown',
  image2: '../fake-data/blob/hipster.png',
  image2ContentType: 'unknown',
  image3: '../fake-data/blob/hipster.png',
  image3ContentType: 'unknown',
  image4: '../fake-data/blob/hipster.png',
  image4ContentType: 'unknown',
};

export const sampleWithNewData: NewProject = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
