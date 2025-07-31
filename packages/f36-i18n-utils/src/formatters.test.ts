import { formatNumber, formatNumberList, formatStringList } from '.';

describe('I18n utility functions', function () {
  describe('formatNumber', () => {
    it('returns small integers unchanged', () => {
      expect(formatNumber('de-DE', 132)).toBe('132');
      expect(formatNumber('en-US', 132)).toBe('132');
      expect(formatNumber('fr-FR', 132)).toBe('132');
      expect(formatNumber('de-DE', -132)).toBe('-132');
      expect(formatNumber('en-US', -132)).toBe('-132');
      expect(formatNumber('fr-FR', -132)).toBe('-132');
    });

    it('returns number with fraction localized', () => {
      expect(formatNumber('de-DE', 132.56)).toBe('132,56');
      expect(formatNumber('en-US', 132.56)).toBe('132.56');
      expect(formatNumber('fr-FR', 132.56)).toBe('132,56');
      expect(formatNumber('de-DE', -132.56)).toBe('-132,56');
      expect(formatNumber('en-US', -132.56)).toBe('-132.56');
      expect(formatNumber('fr-FR', -132.56)).toBe('-132,56');
    });

    it('returns big number with separators', () => {
      expect(formatNumber('de-DE', 13256)).toBe('13.256');
      expect(formatNumber('en-US', 13256)).toBe('13,256');
      expect(formatNumber('fr-FR', 13256)).toBe('13 256');
      expect(formatNumber('de-DE', -13256)).toBe('-13.256');
      expect(formatNumber('en-US', -13256)).toBe('-13,256');
      expect(formatNumber('fr-FR', -13256)).toBe('-13 256');
    });

    it('returns big number with fraction localized', () => {
      expect(formatNumber('de-DE', 54213256.89)).toBe('54.213.256,89');
      expect(formatNumber('en-US', 54213256.89)).toBe('54,213,256.89');
      expect(formatNumber('fr-FR', 54213256.89)).toBe('54 213 256,89');
      expect(formatNumber('de-DE', -54213256.89)).toBe('-54.213.256,89');
      expect(formatNumber('en-US', -54213256.89)).toBe('-54,213,256.89');
      expect(formatNumber('fr-FR', -54213256.89)).toBe('-54 213 256,89');
    });
  });

  describe('formatNumberList', () => {
    it('returns empty string if list is empty', () => {
      const list = [];

      expect(formatNumberList('de-DE', list)).toBe('');
      expect(formatNumberList('en-US', list)).toBe('');
      expect(formatNumberList('fr-FR', list)).toBe('');
    });

    it('returns string if list has one element', () => {
      const list = [123];

      expect(formatNumberList('de-DE', list)).toBe('123');
      expect(formatNumberList('en-US', list)).toBe('123');
      expect(formatNumberList('fr-FR', list)).toBe('123');
    });

    it('inserts "and" if list has two elements', () => {
      const list = [123, 453.547];

      expect(formatNumberList('de-DE', list)).toBe('123 und 453,547');
      expect(formatNumberList('en-US', list)).toBe('123 and 453.547');
      expect(formatNumberList('fr-FR', list)).toBe('123 et 453,547');
    });

    it('inserts comma and "and" if list has three elements', () => {
      const list = [123, 453.547, 1341075];

      expect(formatNumberList('de-DE', list)).toBe(
        '123, 453,547 und 1.341.075',
      );
      expect(formatNumberList('en-US', list)).toBe(
        '123, 453.547 and 1,341,075',
      );
      expect(formatNumberList('fr-FR', list)).toBe('123, 453,547 et 1 341 075');
    });

    it('inserts commas and "and" if list has more elements', () => {
      const list = [123, 453.547, 1341075, 8, 9];
      expect(formatNumberList('de-DE', list)).toBe(
        '123, 453,547, 1.341.075, 8 und 9',
      );
      expect(formatNumberList('en-US', list)).toBe(
        '123, 453.547, 1,341,075, 8 and 9',
      );
      expect(formatNumberList('fr-FR', list)).toBe(
        '123, 453,547, 1 341 075, 8 et 9',
      );
    });
  });

  describe('formatStringList', () => {
    it('returns an empty string if list is empty', () => {
      const list: string[] = [];

      expect(formatStringList('de-DE', list)).toBe('');
      expect(formatStringList('en-US', list)).toBe('');
      expect(formatStringList('fr-FR', list)).toBe('');
    });

    it('returns string if list has one element', () => {
      const list = ['one'];

      expect(formatStringList('de-DE', list)).toBe('one');
      expect(formatStringList('en-US', list)).toBe('one');
      expect(formatStringList('fr-FR', list)).toBe('one');
    });

    it('inserts "and" if list has two elements', () => {
      const list = ['one', 'two'];

      expect(formatStringList('de-DE', list)).toBe('one und two');
      expect(formatStringList('en-US', list)).toBe('one and two');
      expect(formatStringList('fr-FR', list)).toBe('one et two');
    });

    it('inserts comma and "and" if list has three elements', () => {
      const list = ['one', 'two', 'three'];

      expect(formatStringList('de-DE', list)).toBe('one, two und three');
      expect(formatStringList('en-US', list)).toBe('one, two and three');
      expect(formatStringList('fr-FR', list)).toBe('one, two et three');
    });

    it('inserts commas and "and" if list has more elements', () => {
      const list = ['one', 'two', 'three', 'four', 'five'];
      expect(formatStringList('de-DE', list)).toBe(
        'one, two, three, four und five',
      );
      expect(formatStringList('en-US', list)).toBe(
        'one, two, three, four and five',
      );
      expect(formatStringList('fr-FR', list)).toBe(
        'one, two, three, four et five',
      );
    });
  });
});
