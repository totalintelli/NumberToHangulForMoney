function changeHangul() {
  alert("changeHangul!!");
}

function chnageDigitToHangul(numberString) {
  let number = parseInt(numberString);
  if (number === 0) {
    return "영";
  } else if (number === 1) {
    return "일";
  } else if (number === 2) {
    return "이";
  } else if (number === 3) {
    return "삼";
  } else if (number === 4) {
    return "사";
  } else if (number === 5) {
    return "오";
  } else if (number === 6) {
    return "육";
  } else if (number === 7) {
    return "칠";
  } else if (number === 8) {
    return "팔";
  } else if (number === 9) {
    return "구";
  }
}

function changeNumberToHangul(numberString) {
  let result = "";
  let dividend = parseInt(numberString);
  let strTen = "십";
  if (dividend < 10) {
    result = chnageDigitToHangul(numberString);
  } else if (dividend === 10) {
    result = strTen;
  } else if (dividend > 10 && dividend < 100) {
    for (let index = 1; index < 9; index++) {
      if (dividend % 10 === 0) {
        result = chnageDigitToHangul(parseInt(dividend / 10)) + strTen;
        break;
      }
      if (dividend / 10 >= 1 && dividend / 10 < 2) {
        result = strTen + chnageDigitToHangul(dividend % 10);
        break;
      } else {
        result =
          chnageDigitToHangul(parseInt(dividend / 10)) +
          strTen +
          chnageDigitToHangul(dividend % 10);
        break;
      }
    }
  }
  return result;
}
