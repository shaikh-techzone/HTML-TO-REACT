// Bubble Sort Algorithm

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        // swapping array elements
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

// Selection Sort Algorithm

function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

// Merge Sort Algorithm

function merge(arr1, arr2) {
  let res = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

// Recursive merge sort
function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;

  // Splitting into two halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // merging the two sorted halves
  return merge(left, right);
}

var arr1 = [24, 5, 7, 8, 532, 78, 9, 0, 32, 1];
var arr2 = [24, 5, 7, 8, 532, 78, 9, 0, 32, 1];
var arr3 = [24, 5, 7, 8, 532, 78, 9, 0, 32, 1];

console.log("Original Array", arr1);
var res1 = bubbleSort(arr1);
console.log("Bubble Sorted Array", res1);

console.log("Original Array", arr2);
var res2 = bubbleSort(arr2);
console.log("Selection Sorted Array", res2);

console.log("Original Array", arr3);
var res3 = bubbleSort(arr3);
console.log("Merge Sorted Array", res3);
