import { getRandomIndex } from '../utils';

test('should not return current index', () => {
    const current = 5;
    const result = getRandomIndex(16, current);

    expect(result).not.toBe(current);
});