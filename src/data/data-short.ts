import {Partner} from '../types'

export const input: Partner[] = [
  {
    firstName: 'Darin',
    lastName: 'Daignault',
    email: 'ddaignault@skyslopepartners.com',
    state: 'California',
    availableDates: ['2024-05-03', '2024-05-06'],
  },
  {
    firstName: 'Crystal',
    lastName: 'Brenna',
    email: 'cbrenna@skyslopepartners.com',
    state: 'Wisconsin',
    availableDates: ['2024-04-27', '2024-04-29', '2024-04-30'],
  },
  {
    firstName: 'Janyce',
    lastName: 'Gustison',
    email: 'jgustison@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-29', '2024-04-30', '2024-05-01'],
  },
  {
    firstName: 'Tifany',
    lastName: 'Mozie',
    email: 'tmozie@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-28', '2024-04-29', '2024-05-01', '2024-05-04'],
  },
  {
    firstName: 'Temple',
    lastName: 'Affelt',
    email: 'taffelt@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-28', '2024-04-29', '2024-05-02', '2024-05-04'],
  },
  {
    firstName: 'Robyn',
    lastName: 'Yarwood',
    email: 'ryarwood@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-29', '2024-04-30', '2024-05-02', '2024-05-03'],
  },
  {
    firstName: 'Shirlene',
    lastName: 'Filipponi',
    email: 'sfilipponi@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-30', '2024-05-01'],
  },
  {
    firstName: 'Oliver',
    lastName: 'Majica',
    email: 'omajica@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-28', '2024-04-29', '2024-05-01', '2024-05-03'],
  },
  {
    firstName: 'Wilber',
    lastName: 'Zartman',
    email: 'wzartman@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-29', '2024-04-30', '2024-05-02', '2024-05-03'],
  },
  {
    firstName: 'Eugena',
    lastName: 'Auther',
    email: 'eauther@skyslopepartners.com',
    state: 'California',
    availableDates: ['2024-05-04', '2024-05-09'],
  },
]

export const output = [
  {
    attendeeCount: 1,
    attendees: ['cbrenna@skyslopepartners.com'],
    name: 'Wisconsin',
    startDate: '2024-04-29',
  },
  {
    attendeeCount: 0,
    attendees: [],
    name: 'California',
    startDate: null,
  },
  {
    attendeeCount: 3,
    attendees: [
      'omajica@skyslopepartners.com',
      'taffelt@skyslopepartners.com',
      'tmozie@skyslopepartners.com',
    ],
    name: 'Colorado',
    startDate: '2024-04-28',
  },
]
