/**
 * @param {Number} N, whose maximum binary gap is to be returned.
 * @returns {Number} length of the biggest binary gap.
 */
function maxBinaryGap(N) {
  //Convert the give number to a string in binary notation.
  const binaryString = N.toString(2);
  //initialize the maxlength to 0
  let maxLength = 0;

  for (let i = 0; i < binaryString.length - 1; i++) {
    let length = 0;
    if (binaryString[i] == 1) {
      for (let j = i + 1; j < binaryString.length; j++) {
        //if the digint in the number in 1, break the loop
        //else if it's 0, increment the length;
        if (binaryString[j] == 1) break;
        else length++;
        // Checking the edge case where number is of the form 100000
        if (j == binaryString.length - 1 && binaryString[j] == 0) length = 0;
      }
    }
    if (length > maxLength) maxLength = length;
  }
  return maxLength;
}

export default maxBinaryGap;
