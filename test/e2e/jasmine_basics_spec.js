'use strict';

describe("testing jasmine basics ", function(){

    it("The 'toBe' matcher compares with ===", function() {
        var a = 12;
        var b = a;
        var c = 12;

        expect(a).toBe(b);
        expect(a).toBe(c);
        expect(undefined).not.toBe(null);
        expect({'d' : 'e'}).not.toBe({'d' : 'e'});
    });

    it("The 'toEquals' matcher works for literals and objects", function() {
        var a = 12;
        var b = a;
        var c = 12;

        expect(a).toEqual(b);
        expect(a).toEqual(c);
        expect(undefined).not.toEqual(null);
        expect({'d' : 'e'}).toEqual({'d' : 'e'});
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
        expect(undefined).not.toBeTruthy();
        expect(null).not.toBeTruthy();
        expect(0).not.toBeTruthy();
        expect(1).toBeTruthy();
        expect('').not.toBeTruthy();
        expect('false').toBeTruthy();
        expect(true).toBeTruthy();
        expect(false).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(0).toBeFalsy();
        expect(1).not.toBeFalsy();
        expect('').toBeFalsy();
        expect('false').not.toBeFalsy();
        expect(true).not.toBeFalsy();
        expect(false).toBeFalsy();
    });

    // 'this' can be used to share state between 1 beforeEach/it/afterEach

    // a spy stops all execution on a function
    // a spy with .and.callThrough() also executes the function
    // a spy with .and.returnValue(a) will always return the specified value
    // a spy with .and.returnValues(a,b,c) will return the x-st value on the x-st call
    // a spy with .and.callFake(f) will delegate to the function f
    // a spy tracks: calls.count(), calls.any(), calls.argsFor(i), calls.reset()

    // spyOn(foo, 'setBar') in case there is a function to spy on
    // jasmine.createSpy(name) is a bare spy (no function to call)
    // jasmine.createSpyObj('obj', ['f1', 'f2', 'f3', 'f4']);

    // partial matching: jasmine.objectContaining, jasmine.arrayContaining, asymmetricMatch

    // timeout: jasmine will wait 5 seconds for a call to done, if reached it will just continue as if called

    // a custom equality can be used, just as a custom matcher


});