import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate strings longer than 10 characters', () => {
    const result = pipe.transform('Hello World', 10);
    expect(result).toBe('Hello Worl...');
  });

  it('should not truncate string if it is less than or equal to 10 characters', () => {
    const result = pipe.transform('Hello', 10);
    expect(result).toBe('Hello');
  });

  it('should handle empty strings correctly', () => {
    const result = pipe.transform('', 10);
    expect(result).toBe('');
  });

  it('should handle no limit passed and use default of 10', () => {
    const result = pipe.transform('Hello World');
    expect(result).toBe('Hello Worl...');
  });

  it('should not add ellipses if the exact limit of characters', () => {
    const result = pipe.transform('Hello Worl', 10);
    expect(result).toBe('Hello Worl');
  });
});
