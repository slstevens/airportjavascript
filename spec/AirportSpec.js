describe('Airport', function() {

	beforeEach(function() {
		plane = new Plane;
		airport = new Airport;
	})

	it('can have planes', function() {
		expect(airport.planes).toEqual([]);
	});

	it('can allow a plane to land', function() {
		airport.land(plane);
		expect(airport.planes).toEqual([plane]);
	});

	it('can allow a plane to takeoff', function(){
		airport.land(plane);
		airport.takeoff(plane);
		expect(airport.planes).toEqual([]);
	});
});


// it can have planes 
// it can allow a plane to land
// it can allow a plane to takeoff
// it has passengers inside
// it has a capacity
// it can transfer passengers from airport to plane
// it can receive passengers from plane to airport 