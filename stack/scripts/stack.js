function Stack() {

    var data = [];

    var add = function(element) {
        data.push(element);
    };

    var remove = function() {
        return data.pop();
    };

    var find = function(value) {
        var comparisons = 0;

        for(var index in data) {
            comparisons++;

            if(value == data[index]) {
                return {
                    comparisons: comparisons,
                    value: data[index]
                };
            }
        }

        // Add 1 to the comparisons because we are cheating and using arrays
        comparisons++;

        return {
            comparisons: comparisons,
            value: undefined
        };
    };

    var length = function() {
        return data.length;
    };

    return {
        add: add,
        remove: remove,
        length: length,
        find: find
    };
}