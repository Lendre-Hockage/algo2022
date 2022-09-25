const bubbleSort = (arr = array) => {
  const arrLength  = arr.length - 1;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

bubbleSort([15, -10, 1, 25, 20, -12, 223, 2571, 221, 10, -1, 0, 0, 19]);

// output: [-12, -10, -1, 0, 0, 1, 15, 19, 20, 25, 221, 223, 2571]

const selectionSort = (arr = array) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minValIndex] > arr[j]) {
        minValIndex = j;
      }
    }

    if (minValIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minValIndex];
      arr[minValIndex] = temp;
    }
  }

  return arr;
};

selectionSort([500, 222, 278, -30, 56, 0, -520, -5, 1, 12]);

// output: [ -520, -30, -5, 0, 1, 12, 56, 222, 278, 500 ]