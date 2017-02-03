describe('Testing Linked Lists', function() {
    it('Starts with an empty list', function() {
        var list = new LinkedList();

        expect(list.length()).toBe(0);
    });

    it('Is able to add an element', function() {
        var list = new LinkedList();

        list.add('Andrew');

        expect(list.length()).toBe(1);
    });

    it('Is able to add multiple elements', function() {
       var list = new LinkedList();

        list.add('Andrew');
        list.add('Bobby');

        expect(list.length()).toBe(2);
    });

    it('Can find stored elements', function() {
        var list = new LinkedList();

        list.add('Andrew');
        list.add('Bobby');

        var result = list.find('Bobby');
        expect(result.comparisons).toBe(2);
        expect(result.value).toBe('Bobby');
    });

    it("Doesn't find elements which are not present", function() {
        var list = new LinkedList();

        list.add('Andrew');
        list.add('Bobby');

        var result = list.find('Tony');
        expect(result.comparisons).toBe(3);
        expect(result.value).toBe(undefined);
    });
});