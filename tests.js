QUnit.test("hangul change test", function(assert) {
  assert.equal(changeNumberToHangul(1), "일");
  assert.equal(changeNumberToHangul(2), "이");
  assert.equal(changeNumberToHangul(3), "삼");
  assert.equal(changeNumberToHangul(4), "사");
  assert.equal(changeNumberToHangul(5), "오");
  assert.equal(changeNumberToHangul(6), "육");
  assert.equal(changeNumberToHangul(7), "칠");
  assert.equal(changeNumberToHangul(8), "팔");
  assert.equal(changeNumberToHangul(9), "구");
  assert.equal(changeNumberToHangul(10), "십");
});
