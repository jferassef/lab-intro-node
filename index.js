class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length == 0) {
      this.items.push(item);
      this.length = 1;
      return;
    }
    let i = 0;
    while (i < this.length) {
      if (this.items[i] > item) {
        break;
      }
      i++;
    }
    console.debug(this.length);
    if (i === this.length) {
      this.items.push(item);
    } else {
      console.debug(i);
      this.items.splice(i, 0, item);
    }
    this.length++;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    let sumItems = 0;
    for (let i = 0; i < this.length; i++) {
      sumItems += this.items[i];
    }
    return sumItems;
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
