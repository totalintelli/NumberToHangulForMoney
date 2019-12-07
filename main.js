// 참고 : Copyright 취생몽사(http://bemeal2.tistory.com)
// 소스는 자유롭게 사용가능합니다. Copyright 는 삭제하지 마세요.

// 1 ~ 9 한글 표시
var arrNumberWord = new Array(
  "",
  "일",
  "이",
  "삼",
  "사",
  "오",
  "육",
  "칠",
  "팔",
  "구"
);
// 10, 100, 100 자리수 한글 표시
var arrDigitWord = new Array("", "십", "백", "천");
// 만단위 한글 표시
var arrManWord = new Array("", "만", "억", "조");

//콤마찍기
function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

// 콤마 풀기. 참고 : https://blog.munilive.com/javascript-comma-uncomma/
function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
}

function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

function changeNumberToHangul(input) {
  var num_value = uncomma(input); // 입력한 숫자. uncomma 함수 : 사용자가 콤마를 입력할 때 숫자로 변환
  var num_length = num_value.length; // 입력한 숫자의 길이

  // 입력 값이 비어있으면 출력 부분을 표시하지 않는다.
  if (isNaN(num_value) == true) return;

  var han_value = ""; // 숫자를 한글로 변환한 글자.
  var man_count = 0; // 0이 아닌 부분의 개수, 앞에서 4의 배수번째에 숫자가 있으면 0으로 초기화.

  // 입력한 숫자의 길이만큼 반복한다.
  for (i = 0; i < num_length; i++) {
    // 각 자라의 숫자를 문자로 표시. (0은 제외)
    var strTextWord = arrNumberWord[num_value.charAt(i)];

    // 각 자리의 숫자가 0이 아닌 경우, 십/백/천 표시.
    if (strTextWord != "") {
      // 0이 아닌 부분의 개수를 증가한다. 만 단위마다 표시할 수 있게 된다.
      man_count++;
      // 십, 백, 천 자릿수 배열 인덱스 = (숫자의 길이 - (글자의 인덱스 + 1)) % 단위 자릿수
      //                                (num_length - (i             + 1)) % 4
      // 십, 백, 천에 해당하는 글자를 구한다.
      var index = (num_length - (i + 1)) % 4;
      strTextWord += arrDigitWord[index];
      // '일십', '일백', '일천'인 경우, '일'을 생략한다.
      if (index > 0) {
        strTextWord = strTextWord.replace("일", "");
      }
    }

    // 0이 아니고 십, 백, 천 자릿수 배열 인덱스가 0인지 확인한다. -> "만, 억, 조"인 경우가 된다.
    // 만 단위마다 표시. (0인 경우에도 만 단위는 표시한다.)
    if (man_count != 0 && (num_length - (i + 1)) % 4 == 0) {
      // 0이 아닌 부분의 개수를 초기화한다. "십, 백, 천" 글자를 출력할 수 있게 된다.
      man_count = 0;
      // 만, 억, 조 자릿수 배열 인덱스 = (숫자의 길이 - (글자의 인덱스 + 1)) / 단위 자릿수
      //                                (num_length - (i             + 1)) / 4
      // 만, 억, 조에 해당하는 글자를 구한다.
      strTextWord = strTextWord + arrManWord[(num_length - (i + 1)) / 4];
      if (num_length > 4) {
        var manIndex = strTextWord.indexOf("만");
        var numberOfManIndex = manIndex - 1;
        // 만, 억, 조 뒤에 한 칸씩 띄운다.
        var billionIndex = strTextWord.indexOf("억"); // '억' 인덱스
        var trillionIndex = strTextWord.indexOf("조"); // '조' 인덱스
        if (manIndex > -1 || billionIndex > -1 || trillionIndex > -1) {
          strTextWord = strTextWord + " ";
        }
      }
    }

    // 입력한 금액에 해당하는 글자를 구한다.
    han_value += strTextWord;
  }

  return han_value.trim();
}

// 입력값에 콤마를 붙인다. 변환한 한글을 화면에 출력한다.
function changeHangulMoney(txt_id) {
  // 숫자를 입력하면 자동으로 콤마가 붙는다.
  txt_id.value = comma(uncomma(txt_id.value));
  var han_value = changeNumberToHangul(txt_id.value); // 숫자를 한글로 변환한 글자.

  // 입력한 금액에 해당하는 글자를 화면에 표시한다.
  document.all.han_money.innerText = han_value;
}
