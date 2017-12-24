window.onload = function() {
  var next = document.getElementById('next');
  next.onclick = loadNext;
}

function loadNext() {
  var current = document.getElementById('current');

  current.value = current.value
  // breaks up the string into characters
    .split('')
  // filters out non-numeric characters
    .filter(ele => !isNaN(ele))
  // reduces the characters into an ordered (by occurrence) list
  // each element is the number and # of times it occurs
    .reduce((count, numb) => {
      var number = count.find((ele) => {
        return ele.num == numb;
      });

      if (number === undefined) {
        // first time seeing the number
        count.push({num: numb, count: 1});
      } else {
        // seen before, update count
        number.count = number.count + 1;
      }
      return count;
    }, [])
  // reduces the tally into a formatted string
  // of {# of occurrences}{number} with each value joined
  // by -'s
    .reduce((acc, cur) => {

      // if the accumulator is falsely (e.g. "") then it is
      // the first number and does not need a -
      if (acc) {
        return acc + "-" + cur.count.toString() + cur.num.toString()
      } else {
        return cur.count.toString() + cur.num.toString()
      }
    }, "");

}
