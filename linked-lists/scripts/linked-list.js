function LinkedList() {

    var list = {
        head: undefined,
        tail: undefined,
    };

    var add = function(value) {
        // Create the object
        var element = new LinkedListItem(value);

        // First time adding?
        if(list.head === undefined && list.tail === undefined) {
            // Just set it up
            list.head = list.tail = element;
        }
        else {
            // Not the first element, so let's add it into the end
            list.tail.next = element;
            list.tail = element;
        }
    };

    var find = function(value) {
        
        var element = list.head;
        var comparisons = 0;

        while(element !== undefined) {
            comparisons++;

            if(element.value == value) {
                return {
                    comparisons: comparisons,
                    value: value
                }
            }

            element = element.next;
        }

        comparisons++;

        return {
            comparisons: comparisons,
            value: undefined
        }
    };

    var length = function() {
        // Iterate through all to count
        var count = 0;

        // Are there any elements?
        if(list.head === undefined) {
            // There is no defined head, so we are done
            return count;
        }

        // There are, so let's traverse
        var element = list.head;

        do {
            count++;
        } while((element = element.next) !== undefined);

        return count;
    };

    return {
        add: add,
        find: find,
        length: length
    };
}

function LinkedListItem(value) {
    var data = {
        next: undefined,
        value: value,
    };

    return {
        next: data.next,
        value: data.value
    };
}