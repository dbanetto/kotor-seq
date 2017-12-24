window.onload = function() {

  var current = document.getElementById('current');

  console.log('hi');
  var next = document.getElementById('next');
  next.onclick = loadNext;

}

function loadNext() {
  var current = document.getElementById('current');

  current.value = current.value.split('')
    .filter(ele => !isNaN(ele))
    .reduce((count, numb) => {
      var number = count.find((ele) => {
        return ele.num == numb;
      });

      if (number === undefined) {
        count.push({num: numb, count: 1});
      } else {
        number.count = number.count + 1;
      }
      return count;
    }, [])
    .reduce((acc, cur) => {

      if (acc) {
        return acc + "-" + cur.count.toString() + cur.num.toString()
      } else {
        return cur.count.toString() + cur.num.toString()
      }
    }, "");

}
