export const students = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    school: 'Mathematics',
    grade: 90
  },
  {
    firstName: 'Ben',
    lastName: 'Jones',
    age: 19,
    school: 'Physics',
    grade: 78
  },
  {
    firstName: 'Robert',
    lastName: 'Newman',
    age: 24,
    school: 'Physics',
    grade: 89
  },
  {
    firstName: 'Maria',
    lastName: 'Epstein',
    age: 23,
    school: 'Litterature',
    grade: 85
  }
];

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  school: string;
  grade: number;
}
