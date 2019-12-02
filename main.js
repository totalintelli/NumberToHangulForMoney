function changeHangul() {
  alert("changeHangul!!");
}

function chnageDigitToHangul(number) {
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

function changeNumberToHangul(number) {
  let result = "";
  if (number < 10) {
    result = chnageDigitToHangul(number);
  }
  return result;
}
