QUnit.test("hangul change test", function(assert) {
  assert.equal(changeNumberToHangul("1"), "일");
  assert.equal(changeNumberToHangul("80,270"), "팔만 이백칠십");
  assert.equal(changeNumberToHangul("111,111"), "십일만 천백십일");
  assert.equal(
    changeNumberToHangul("1,234,567,890"),
    "십이억 삼천사백오십육만 칠천팔백구십"
  );
  assert.equal(changeNumberToHangul("100,000,000,000,000"), "백조");
});
