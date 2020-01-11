
import { onSubmitHandler } from './onSubmitHandlerfortesting';

describe("onSubmitHandler", () => {
    it('should empty InputField', () => {
        const event = '';
        const empty = onSubmitHandler('');
        expect(empty).toBe(event.value);
    });
  });