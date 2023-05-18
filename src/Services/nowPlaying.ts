import { TabData } from '../types/movies-types';

export const genresList = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

export const schedule = {
  0: {
    1893: { start: '10:00 AM' },
    672: { start: '11:30 AM' },
    77338: { start: '01:00 PM' },
    497: { start: '02:30 PM' },
    238: { start: '04:00 PM' },
  },
  1: {
    238: { start: '04:30 PM' },
    120: { start: '06:00 PM' },
    9732: { start: '09:00 PM' },
    13223: { start: '12:00 AM' },
  },
  2: {
    475557: { start: '08:00 PM' },
    9732: { start: '09:30 PM' },
    111: { start: '11:00 PM' },
    13223: { start: '12:30 AM' },
  },
  3: {
    1893: { start: '11:30 AM' },
    9732: { start: '10:00 PM' },
  },
  4: {
    120: { start: '05:30 PM' },
    475557: { start: '07:00 PM' },
    111: { start: '10:00 PM' },
    13223: { start: '11:30 PM' },
  },
  5: {
    497: { start: '04:00 PM' },
    238: { start: '05:30 PM' },
    120: { start: '07:00 PM' },
    475557: { start: '08:30 PM' },
  },
  6: {
    497: { start: '03:30 PM' },
    238: { start: '05:00 PM' },
    120: { start: '06:30 PM' },
  },
};

export const tabData: TabData[] = [
  { day: 'Monday', movieList: schedule[0] },
  { day: 'Tuesday', movieList: schedule[1] },
  { day: 'Wednesday', movieList: schedule[2] },
  { day: 'Thursday', movieList: schedule[3] },
  { day: 'Friday', movieList: schedule[4] },
  { day: 'Saturday', movieList: schedule[5] },
  { day: 'Sunday', movieList: schedule[6] },
];

export const moviesId = [
  1893, 672, 77338, 497, 238, 120, 475557, 9732, 111, 13223, 808, 98,
];
