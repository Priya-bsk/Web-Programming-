 class Transport {
            constructor(vehicleType) {
                this.vehicleType = vehicleType;
                this.tripDetails = {
                    fare: 0
                };
            }

            calculateFare(distance) {
                const rates = {
                    bus: 2,   
                    car: 8,   
                    bike: 5   
                };

                return distance * rates[this.vehicleType];
            }
        }

        function calculateFare() {
            const vehicleType = document.getElementById('vehicleType').value;
            const distance = document.getElementById('distance').value;
            const result = document.getElementById('result');
            const fareDisplay = document.getElementById('fareDisplay');

            if (!vehicleType) {
                alert('Please select a vehicle type');
                return;
            }
            if (!distance || distance <= 0) {
                alert('Please enter a valid distance');
                return;
            }

            const transport = new Transport(vehicleType);
            const fare = transport.calculateFare(distance);

            fareDisplay.textContent = `Estimated Fare: ₹${fare}`;
            result.style.display = 'block';
        }