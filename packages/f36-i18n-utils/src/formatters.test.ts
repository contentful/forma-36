import {
  formatCurrencyWithLocale,
  formatNumber,
  formatNumberList,
  formatStringList,
  formatTruncatedStringList,
} from '.';

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

  describe('formatCurrencyWithLocale', () => {
    it('formats number as currency based on locale', () => {
      expect(formatCurrencyWithLocale('en-US', 15)).toBe('$15');
      expect(formatCurrencyWithLocale('fr-FR', 15)).toBe('15 $');
      expect(formatCurrencyWithLocale('de-DE', 15)).toBe('15 $');
    });

    it('overrides currency when provided in options', () => {
      expect(formatCurrencyWithLocale('en-US', 15, { currency: 'EUR' })).toBe(
        '€15',
      );
      expect(
        formatCurrencyWithLocale('en-US', 15.5, { minimumFractionDigits: 2 }),
      ).toBe('$15.50');
    });
  });

  describe('formatNumberList', () => {
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

    it('inserts "or" if list has two elements and type is disjunction', () => {
      const list = [123, 453.547];
      expect(formatNumberList('de-DE', list, 'disjunction')).toBe(
        '123 oder 453,547',
      );
      expect(formatNumberList('en-US', list, 'disjunction')).toBe(
        '123 or 453.547',
      );
      expect(formatNumberList('fr-FR', list, 'disjunction')).toBe(
        '123 ou 453,547',
      );
    });

    // 'Unit' type lists sometimes use "and" instead of just commas, depending on the locale
    it('inserts comma or "and" if list has two elements and type is unit', () => {
      const list = [123, 453.547];
      expect(formatNumberList('de-DE', list, 'unit')).toBe('123, 453,547');
      expect(formatNumberList('en-US', list, 'unit')).toBe('123, 453.547');
      expect(formatNumberList('fr-FR', list, 'unit')).toBe('123 et 453,547');
    });

    it('inserts comma and "and" if list has three elements', () => {
      const list = [123, 453.547, 1341075];

      expect(formatNumberList('de-DE', list)).toBe(
        '123, 453,547 und 1.341.075',
      );
      expect(formatNumberList('en-US', list)).toBe(
        '123, 453.547, and 1,341,075',
      );
      expect(formatNumberList('fr-FR', list)).toBe('123, 453,547 et 1 341 075');
    });

    it('inserts comma and "or" if list has three elements and type is disjunction', () => {
      const list = [123, 453.547, 1341075];
      expect(formatNumberList('de-DE', list, 'disjunction')).toBe(
        '123, 453,547 oder 1.341.075',
      );
      expect(formatNumberList('en-US', list, 'disjunction')).toBe(
        '123, 453.547, or 1,341,075',
      );
      expect(formatNumberList('fr-FR', list, 'disjunction')).toBe(
        '123, 453,547 ou 1 341 075',
      );
    });

    it('inserts only commas or commas and "and" if list has three elements and type is unit', () => {
      const list = [123, 453.547, 1341075];
      expect(formatNumberList('de-DE', list, 'unit')).toBe(
        '123, 453,547 und 1.341.075',
      );
      expect(formatNumberList('en-US', list, 'unit')).toBe(
        '123, 453.547, 1,341,075',
      );
      expect(formatNumberList('fr-FR', list, 'unit')).toBe(
        '123, 453,547 et 1 341 075',
      );
    });

    it('inserts commas and "and" if list has more elements', () => {
      const list = [123, 453.547, 1341075, 8, 9];
      expect(formatNumberList('de-DE', list)).toBe(
        '123, 453,547, 1.341.075, 8 und 9',
      );
      expect(formatNumberList('en-US', list)).toBe(
        '123, 453.547, 1,341,075, 8, and 9',
      );
      expect(formatNumberList('fr-FR', list)).toBe(
        '123, 453,547, 1 341 075, 8 et 9',
      );
    });

    it('inserts commas and "or" if list has more elements and type is disjunction', () => {
      const list = [123, 453.547, 1341075, 8, 9];
      expect(formatNumberList('de-DE', list, 'disjunction')).toBe(
        '123, 453,547, 1.341.075, 8 oder 9',
      );
      expect(formatNumberList('en-US', list, 'disjunction')).toBe(
        '123, 453.547, 1,341,075, 8, or 9',
      );
      expect(formatNumberList('fr-FR', list, 'disjunction')).toBe(
        '123, 453,547, 1 341 075, 8 ou 9',
      );
    });

    it('inserts only commas or commas and "and" if list has more elements and type is unit', () => {
      const list = [123, 453.547, 1341075, 8, 9];
      expect(formatNumberList('de-DE', list, 'unit')).toBe(
        '123, 453,547, 1.341.075, 8 und 9',
      );
      expect(formatNumberList('en-US', list, 'unit')).toBe(
        '123, 453.547, 1,341,075, 8, 9',
      );
      expect(formatNumberList('fr-FR', list, 'unit')).toBe(
        '123, 453,547, 1 341 075, 8 et 9',
      );
    });
  });

  describe('formatStringList', () => {
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

    it('inserts "or" if list has two elements and type is disjunction', () => {
      const list = ['one', 'two'];
      expect(formatStringList('de-DE', list, 'disjunction')).toBe(
        'one oder two',
      );
      expect(formatStringList('en-US', list, 'disjunction')).toBe('one or two');
      expect(formatStringList('fr-FR', list, 'disjunction')).toBe('one ou two');
    });

    it('inserts comma or "and" if list has two elements and type is unit', () => {
      const list = ['one', 'two'];
      expect(formatStringList('de-DE', list, 'unit')).toBe('one, two');
      expect(formatStringList('en-US', list, 'unit')).toBe('one, two');
      expect(formatStringList('fr-FR', list, 'unit')).toBe('one et two');
    });

    it('inserts comma and "and" if list has three elements', () => {
      const list = ['one', 'two', 'three'];

      expect(formatStringList('de-DE', list)).toBe('one, two und three');
      expect(formatStringList('en-US', list)).toBe('one, two, and three');
      expect(formatStringList('fr-FR', list)).toBe('one, two et three');
    });

    it('inserts comma and "or" if list has three elements and type is disjunction', () => {
      const list = ['one', 'two', 'three'];
      expect(formatStringList('de-DE', list, 'disjunction')).toBe(
        'one, two oder three',
      );
      expect(formatStringList('en-US', list, 'disjunction')).toBe(
        'one, two, or three',
      );
      expect(formatStringList('fr-FR', list, 'disjunction')).toBe(
        'one, two ou three',
      );
    });

    it('inserts only commas or commas and "and" if list has three elements and type is unit', () => {
      const list = ['one', 'two', 'three'];
      expect(formatStringList('de-DE', list, 'unit')).toBe(
        'one, two und three',
      );
      expect(formatStringList('en-US', list, 'unit')).toBe('one, two, three');
      expect(formatStringList('fr-FR', list, 'unit')).toBe('one, two et three');
    });

    it('inserts commas and "and" if list has more elements', () => {
      const list = ['one', 'two', 'three', 'four', 'five'];
      expect(formatStringList('de-DE', list)).toBe(
        'one, two, three, four und five',
      );
      expect(formatStringList('en-US', list)).toBe(
        'one, two, three, four, and five',
      );
      expect(formatStringList('fr-FR', list)).toBe(
        'one, two, three, four et five',
      );
    });

    it('inserts commas and "or" if list has more elements and type is disjunction', () => {
      const list = ['one', 'two', 'three', 'four', 'five'];
      expect(formatStringList('de-DE', list, 'disjunction')).toBe(
        'one, two, three, four oder five',
      );
      expect(formatStringList('en-US', list, 'disjunction')).toBe(
        'one, two, three, four, or five',
      );
      expect(formatStringList('fr-FR', list, 'disjunction')).toBe(
        'one, two, three, four ou five',
      );
    });

    it('inserts only commas or commas and "and" if list has more elements and type is unit', () => {
      const list = ['one', 'two', 'three', 'four', 'five'];
      expect(formatStringList('de-DE', list, 'unit')).toBe(
        'one, two, three, four und five',
      );
      expect(formatStringList('en-US', list, 'unit')).toBe(
        'one, two, three, four, five',
      );
      expect(formatStringList('fr-FR', list, 'unit')).toBe(
        'one, two, three, four et five',
      );
    });
  });

  describe('formatTruncatedStringList', () => {
    it('returns full list when maxLength is equal to the list length', () => {
      const list = ['one', 'two', 'three'];

      expect(formatTruncatedStringList('en-US', list, 3)).toBe(
        'one, two, and three',
      );
      expect(formatTruncatedStringList('de-DE', list, 3)).toBe(
        'one, two und three',
      );
      expect(formatTruncatedStringList('fr-FR', list, 3)).toBe(
        'one, two et three',
      );
    });

    it('returns full list when maxLength is bigger than the list length', () => {
      const list = ['one', 'two'];

      expect(formatTruncatedStringList('en-US', list, 5)).toBe('one and two');
      expect(formatTruncatedStringList('de-DE', list, 5)).toBe('one und two');
      expect(formatTruncatedStringList('fr-FR', list, 5)).toBe('one et two');
    });

    it('returns truncated list when maxLength is less than the list length', () => {
      const list = ['one', 'two', 'three', 'four', 'five'];
      expect(formatTruncatedStringList('en-US', list, 2)).toBe(
        'one, two, and 3 more',
      );
      expect(formatTruncatedStringList('de-DE', list, 2)).toBe(
        'one, two und 3 weitere',
      );
      expect(formatTruncatedStringList('fr-FR', list, 2)).toBe(
        'one, two et 3 autres',
      );
    });

    it('reduces maxLength when list has exactly one more item than maxLength', () => {
      const list = ['one', 'two', 'three'];
      expect(formatTruncatedStringList('en-US', list, 2)).toBe(
        'one and 2 more',
      );
      expect(formatTruncatedStringList('de-DE', list, 2)).toBe(
        'one und 2 weitere',
      );
      expect(formatTruncatedStringList('fr-FR', list, 2)).toBe(
        'one et 2 autres',
      );
    });

    it('handles case where list has exactly one more item', () => {
      const list = ['one', 'two'];

      expect(formatTruncatedStringList('en-US', list, 1)).toBe('one and two');
      expect(formatTruncatedStringList('de-DE', list, 1)).toBe('one und two');
      expect(formatTruncatedStringList('fr-FR', list, 1)).toBe('one et two');
    });
  });
});
