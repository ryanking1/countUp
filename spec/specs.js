describe("countUpBy", function() {
  it("set input value to count to", function() {
    expect(countUpBy(5,1)).to.eql([1,2,3,4,5]);
  });
  it("count up by a number other than 1", function() {
    expect(countUpBy(10,5)).to.eql([5,10]);
  });
  it("stops counting at the correct number", function() {
    expect(countUpBy(14,5)).to.eql([5,10]);
  });
  it("alerts user if input is not a number", function() {
    expect(countUpBy("rt","rt")).to.equal(false);
  });
  it("alerts user if zero is entered", function() {
    expect(countUpBy(0,0)).to.equal(false);
  });
});
