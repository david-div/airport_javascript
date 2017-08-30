describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('when initialized', function() {

    it('should have no planes on the ground', function() {
      expect(airport.onground).toEqual([]);
    });

    it('should have no planes in the air', function() {
      expect(airport.inair).toEqual([]);
    });

  });


});
