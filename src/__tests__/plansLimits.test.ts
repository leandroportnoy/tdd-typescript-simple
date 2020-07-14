import PlansLimits from '../plansLimits';

describe('jbest plans', () => {
    test('if your consumption is below 10 percent else show the renovation message', () => {
        const limits = new PlansLimits();
        expect(limits.verifyLimit(6)).toBe('renovation');
    });

    test('if your consumption is between 10 and 20 percent else show the low message', () => {
        const limits = new PlansLimits();
        expect(limits.verifyLimit(15)).toBe('low');
    });

    test('if your consumption is between 20 and 40 percent else show the medium message', () => {
        const limits = new PlansLimits();
        expect(limits.verifyLimit(25)).toBe('medium');
    });

    test('if your consumption is between 40 and 60 percent else show the normal message', () => {
        const limits = new PlansLimits();
        expect(limits.verifyLimit(45)).toBe('normal');
    });

    test('if your consumption is above 60 percent else show the non-renovation', () => {
        const limits = new PlansLimits();
        expect(limits.verifyLimit(61)).toBe('non-renovation');
    });
})