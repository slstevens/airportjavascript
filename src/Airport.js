function Airport() {
	this.planes = []
	this.passengers = []
	// this.passengers.length = 1000
};

function Plane() {
}

Airport.prototype.land = function(plane) {
	// if (!this.isFull())
		this.planes.push(plane)
	// return plane
};

Airport.prototype.takeoff = function(plane) {
	if(this._isLanded(plane))
		this._clearToTakeoff(plane);
};

Airport.prototype.isFull = function() {
	return this.planes.length === 40
};



Airport.prototype._clearToTakeoff = function(plane) {
	return this._clearManyPlanesToTakeOff(plane, 1)[0];
};

Airport.prototype._clearManyPlanesToTakeOff = function(plane, numberOfPlanes) {
	return this.planes.splice(this._findLocationOf(plane), numberOfPlanes);
};

Airport.prototype._isLanded = function(plane) {
	var notFound = -1
	return this._findLocationOf(plane) !== notFound;
};

Airport.prototype._findLocationOf = function(plane) {
	return this.planes.indexOf(plane) 
};

