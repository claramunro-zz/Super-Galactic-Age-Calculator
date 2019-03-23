import Birthday from '../src/solar';

describe('Birthday', function () {

  it("should calculate age", function () {
    let ageTest = new Birthday("11", "11", "1992");  // day month year life
    expect(ageTest.calcAge()).toEqual("26");
  });
  
});