function Stack() {

    var data = [];

    var add = function(element) {
        // Fill in-kk
        data.push(element);
    };

    var remove = function() {
        // Fill in
        return data.pop();
    };

    var length = function() {
        // Fill in
        return data.length;
    };

    return {
        add: add,
        remove: remove,
        length: length
    };
}