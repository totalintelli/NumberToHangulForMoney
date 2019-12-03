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

function ConvertDecimalNumberToHangul(dividend) {
  let strTen = "십";
  if (dividend % 10 === 0) {
    result = chnageDigitToHangul(parseInt(dividend / 10)) + strTen;
  } else if (dividend > 10 && dividend < 20) {
    result = strTen + chnageDigitToHangul(dividend % 10);
  } else {
    result =
      chnageDigitToHangul(parseInt(dividend / 10)) +
      strTen +
      chnageDigitToHangul(dividend % 10);
  }
  return result;
}

function changeNumberToHangul(numberString) {
  let result = "";
  let dividend = parseInt(numberString);
  let strTen = "십";
  let strHundred = "백";
  let strThousand = "천";

  if (dividend < 10) {
    result = chnageDigitToHangul(numberString);
  } else if (dividend === 10) {
    result = strTen;
  } else if (dividend >= 10 && dividend < 100) {
    result = ConvertDecimalNumberToHangul(dividend);
  } else if (dividend === 100) {
    result = strHundred;
  } else if (dividend > 100 && dividend < 1000) {
    let secondDividend = dividend % 100;
    let hundredDigit = parseInt(dividend / 100);
    if (hundredDigit === 1) {
      if (secondDividend < 10) {
        result = strHundred + chnageDigitToHangul(secondDividend);
      } else if (secondDividend === 10) {
        result = strHundred + strTen;
      } else {
        result = strHundred + ConvertDecimalNumberToHangul(secondDividend);
      }
    } else {
      if (dividend % 100 === 0) {
        result = chnageDigitToHangul(parseInt(dividend / 100)) + strHundred;
      } else if (secondDividend > 0 && secondDividend < 10) {
        result =
          chnageDigitToHangul(parseInt(dividend / 100)) +
          strHundred +
          chnageDigitToHangul(secondDividend % 10);
      } else if (secondDividend === 10) {
        result =
          chnageDigitToHangul(parseInt(dividend / 100)) + strHundred + strTen;
      } else {
        result =
          chnageDigitToHangul(parseInt(dividend / 100)) +
          strHundred +
          ConvertDecimalNumberToHangul(secondDividend);
      }
    }
  } else if (dividend === 1000) {
    result = strThousand;
  }
  return result;
}
