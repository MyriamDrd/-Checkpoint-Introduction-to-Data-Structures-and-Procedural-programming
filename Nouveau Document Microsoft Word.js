function duplicate(arr1, arr2, sum) {
  var arr1 = [3, 1, 7, 9];
  var arr2 = [2, 4, 1, 9, 3];
  var sum = 0;

  var checkduplicate = false;
  for (var i = 0; i < arr1.length; i++) {
    var checkduplicate = false;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        checkduplicate = true;
      }
    }
  }
  if (checkduplicate == false) {
    sum = sum + arr1[i];
  }
  for (var k = 0; k < arr1.length; k++) {
    var checkduplicate = false;
    for (var l = 0; l < arr2.length; l++) {
      if (arr1[k] == arr2[l]) {
        checkduplicate = true;
      }
    }
  }
  if (checkduplicate == false) {
    sum = sum + arr1[k];
    console.log(sum);
  }
}
