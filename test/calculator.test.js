const { calculate, isEven } = require('../calculator'); describe('Autograding test', () => { test('Calculate function exists', () => { expect(typeof calculate).toBe('function'); }); test('isEven function exists', () => { expect(typeof isEven).toBe('function'); }); });

