import { changeDomainHandler } from './changeDomainHandlerfortesting';

describe('changeDomainHandler method', () => {

    it('gets value of the event', () => {
        const event = "deinemutter.de";
        const name = changeDomainHandler("deinemutter.de");
        expect(name).toBe(event.value);

    });
});