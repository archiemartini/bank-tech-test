const DateClass = require('../lib/dateclass')

describe('Date Class', () => {
  
  let dateClass;
  beforeEach(function () {
    dateClass = new DateClass()
  });
  
  it('can get a uk format date', () => {
    expect(dateClass.getDate()).toMatch(/^(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)\d\d$/)
  });

})