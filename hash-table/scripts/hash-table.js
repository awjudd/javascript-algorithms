function HashTable() {

    var data = [];

    var add = function(key, value) {
        var hash = calculate(key);

        while(data[hash] !== undefined && data[hash].key != key) {
            hash++;
        }

        data[hash] = {
            key: key,
            value: value
        };
    };

    var find = function(key) {
        var hash = calculate(key);

        var comparisons = 1;

        while(data[hash] !== undefined && data[hash].key != key) {
            hash++;
            comparisons++;
        }

        return {
            comparisons: comparisons,
            value: data[hash] ? data[hash].value : undefined
        };
    };

    var length = function() {
        var count = 0;

        for(var item in data) {
            var info = data[item];
            if(info && info.key) {
                count++;
            }
        }

        return count;
    };

    var calculate = function(key) {
        // Very weak calculation algorithm, but is useful for dealing with matches
        return key.charCodeAt(0);
    };

    return {
        add: add,
        find: find,
        length: length
    };
}