import { compare } from './functionsfortesting.js';

describe('compare method', () => {

    it('returns a function', () => {
        expect(typeof compare("name")).toEqual('function');
    });

    it('returns 0 if its the objects contains the same attribute', () => {
        const a = { name: "Berta" };
        const b = { name: "Berta" };
        const sort = compare("name");
        expect(sort(a, b)).toBe(0);
    });

    it('returns -1 if the attribute of object a is less than the attribute of object b', () => {
        const a = { name: "Anna" };
        const b = { name: "Berta" };
        const sort = compare("name");
        expect(sort(a, b)).toBe(-1);
    });

    it('returns 1 if the attribute of object a is higher than the attribute of object b', () => {
        const a = { name: "Dorothea" };
        const b = { name: "Claus" };
        const sort = compare("name");
        expect(sort(a, b)).toBe(1);
    });

    it('returns 0 if its the objects doesnt contain the parameter-attribute', () => {
        const a = { name: "Berta" };
        const b = { name: "Berta" };
        const sort = compare("age");
        expect(sort(a, b)).toBe(0);
    });



})