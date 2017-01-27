describe('Testing Hash Tables', function() {
   
    it('Is able to access values it has set', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');

        expect(names.find('Bobby').value).toBe('Tables');
        expect(names.length()).toBe(1);
    });

    it('Allows multiple items to be added', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');
        names.add('Andrew', 'Judd');

        expect(names.length()).toBe(2);
    });

    it('Handles collisions correctly', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');
        names.add('Andrew', 'Judd');
        names.add('Brandon', 'Sanderson');

        expect(names.find('Bobby').value).toBe('Tables');
        expect(names.find('Brandon').value).toBe('Sanderson');
        expect(names.length()).toBe(3);
    });

    it('Overwrites the previous value if key is the same', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');
        names.add('Andrew', 'Judd');
        names.add('Bobby', 'Sanderson');

        expect(names.find('Bobby').value).toBe('Sanderson');
        expect(names.length()).toBe(2);
    });

    it('Finds an element that exists', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');
        names.add('Andrew', 'Judd');

        var result = names.find('Andrew');

        expect(result.value).toBe('Judd');
        expect(result.comparisons).toBe(1);

    });

    it('Finds undefined if the item is not found', function() {
        var names = new HashTable();

        names.add('Bobby', 'Tables');
        names.add('Andrew', 'Judd');

        var result = names.find('Suzy');

        expect(result.value).toBe(undefined);
        expect(result.comparisons).toBe(1);
    });
});