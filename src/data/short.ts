import {Partner} from '../types'

export const input: Partner[] = [
  {
    firstName: 'Dion',
    lastName: 'Lagos',
    email: 'dionmatthew@skyslopepartners.com',
    state: 'California',
    availableDates: ['2024-05-03', '2024-05-06'],
  },
  {
    firstName: 'Zach',
    lastName: 'Olivare',
    email: 'olivare@skyslopepartners.com',
    state: 'Wisconsin',
    availableDates: ['2024-04-27', '2024-04-29', '2024-04-30'],
  },
  {
    firstName: 'Stevie',
    lastName: 'Sullivan',
    email: 'bozo@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-29', '2024-04-30', '2024-05-01'],
  },
  {
    firstName: 'Joe',
    lastName: 'Bailey',
    email: 'joebailey@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-28', '2024-04-29', '2024-05-01', '2024-05-04'],
  },
  {
    firstName: 'Nick',
    lastName: 'Rudeacov',
    email: 'nrudeacov@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-28', '2024-04-29', '2024-05-02', '2024-05-04'],
  },
  {
    firstName: 'Ryan',
    lastName: 'Taylor',
    email: 'rt@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-29', '2024-04-30', '2024-05-02', '2024-05-03'],
  },
  {
    firstName: 'Michell',
    lastName: 'Rios',
    email: 'mrios@skyslopepartners.com',
    state: 'Colorado',
    availableDates: ['2024-04-30', '2024-05-01'],
  },
  {
    firstName: 'Tim',
    lastName: 'Gibson',
    email: 'tgibson@skyslopepartners.com',
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
    attendees: ['olivare@skyslopepartners.com'],
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
      'tgibson@skyslopepartners.com',
      'nrudeacov@skyslopepartners.com',
      'joebailey@skyslopepartners.com',
    ],
    name: 'Colorado',
    startDate: '2024-04-28',
  },
]
