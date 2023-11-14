const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};

// Bind the getArea function to the roomDimensions object
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Now you can use boundGetArea as a standalone function
const area = boundGetArea();

console.log(area); // Output: 5000
