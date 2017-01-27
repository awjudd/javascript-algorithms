describe('Testing Queues', function() {
    it('Starts as an empty list', function() {
        var names = new Queue();

        expect(0).toBe(names.length());
    });

    it('Can add elements to the list', function() {
        var names = new Queue();

        names.add('Bobby');

        expect(names.length()).toBe(1);
    });

    it('Allows multiple items to be added', function() {
        var names = new Queue();

        names.add('Bobby');
        names.add('Andrew');

        expect(names.length()).toBe(2);
    });

    it('Removes the correct element', function() {
        var names = new Queue();

        names.add('Bobby');
        names.add('Andrew');

        expect(names.remove()).toBe('Bobby');
    });

    it('Returns undefined if there are no more elements', function() {
        var names = new Queue(); 

        expect(names.remove()).toBe(undefined);
    });

    it('Finds an element that exists', function() {
        var names = new Queue();

        names.add('Bobby');
        names.add('Andrew');

        var result = names.find('Andrew');

        expect(result.value).toBe('Andrew');
        expect(result.comparisons).toBe(2);

    });

    it('Finds undefined if the item is not found', function() {
        var names = new Queue();

        names.add('Bobby');
        names.add('Andrew');

        var result = names.find('Suzy');

        expect(result.value).toBe(undefined);
        expect(result.comparisons).toBe(3);
    });
});