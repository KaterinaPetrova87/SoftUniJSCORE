function sortedList() {
    return {
        list: [],
        size: 0,
        add: function (element) {
            this.list.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
                this.sort();
            }
        },
        sort: function () {
            this.list.sort((a, b) => a - b)
        },
        get: function (index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
        toString: function () {
            return console.log(this.list.join(', '));
        }
    }
}

let list = sortedList();
list.add(5);
list.add(3);
list.add(7);
list.add(1);
list.toString();
list.remove(2);
list.remove(0);
list.toString();
list.get(1);
list.toString();