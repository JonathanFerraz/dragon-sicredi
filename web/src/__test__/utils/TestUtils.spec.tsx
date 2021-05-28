import { alphabeticalOrder } from '../../utils/alphabeticalOrder';
import { DateFormatter } from '../../utils/dataFormat';

const dataOrder = [
  {
    name: 'React',
    histories: 'React',
    type: 'React',
  },
  {
    name: 'Abdu',
    histories: 'Abdu',
    type: 'Abdu',
  },
  {
    name: 'Charge',
    histories: 'Charge',
    type: 'Charge',
  },
];

describe('Unit tests of the Utils functions ', () => {
  it('should a alphabetic order', () => {
    expect(alphabeticalOrder(dataOrder)).toStrictEqual([
      {
        name: 'Abdu',
        histories: 'Abdu',
        type: 'Abdu',
      },
      {
        name: 'Charge',
        histories: 'Charge',
        type: 'Charge',
      },
      {
        name: 'React',
        histories: 'React',
        type: 'React',
      },
    ]);
  });

  it('should arrange the recognized date', () => {
    expect(DateFormatter('2021-05-21T11:02:13.416Z')).toBe('21/05/2021');
  });
});

export {};
