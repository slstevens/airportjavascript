describe('Airport', function() {

		beforeEach(function() {
			plane = new Plane;
			airport = new Airport;
		})


	describe('with planes', function() {
		
		fillUp = function(airport) {
			for(var i = 0; i < 40; i++) {
				airport.land(new Plane)
			}
		};

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

		it('should only allow a plane to takeoff that is in the airport', function() {
			boeing = new Plane;
			airport.land(boeing);
			airport.land(plane);
			airport.takeoff(boeing);
			expect(airport.planes).toEqual([plane])
		});

		it('should ensure that a plane has landed before taking off', function() {
			boeing = new Plane;
			airport.land(plane)
			airport.takeoff(boeing)
			expect(airport.planes.length).toEqual(1)
		});

		it('should know if its full', function() {
			fillUp(airport)
			expect(airport.isFull()).toBe(true)
		});

		it('should know if its not full', function() {
			expect(airport.isFull()).toBe(false)
		});

		xit('should know how many planes are in the airport', function() {
			airport.land(plane)
			expect(airport.planes.length).toEqual(1)
		});

		xit('should not exceed its capacity', function() {
			fillUp(airport)
			airport.land(new Plane)
			expect(airport.planes.length).toEqual(40)
		});
	});

	describe('with people', function() {

		it('has passengers', function() {
			expect(airport.passengers).toEqual([])
		});

		xit('has a maximum capacity of passengers', function() {
			expect(airport.passengers.length).toEqual(1000)
		});

		xit('it can accept passengers into it', function() {
			exp
		});

		xit('can transfer(release) passengers from airport', function() {

		})

	});
});


// it can have planes 
// it can allow a plane to land
// it can allow a plane to takeoff
// it has passengers inside
// it has a capacity
// it can transfer passengers from airport to plane
// it can receive passengers from plane to airport 