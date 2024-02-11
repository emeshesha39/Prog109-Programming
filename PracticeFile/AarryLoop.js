//var times = 0;

// while (times < 10) {
//     console.log('I tired', times);
//     times++;
// }


// var times = 10; // Initialize times to 10

// while (times > 0) { // Change loop condition to check if times is greater than 0
//     console.log("I tired", times);
//     times--; // Decrement times in each iteration
// }
//Test the code and if it is false then no execusion, if it is true
//it will execute until it gets false.


// do {
//     console.log("I tired", times);
//     times++;
// } while (times < 10);
// Garentie one execusion and then test the code


// myList = ['apple', 'orange','banana'];

// for(var i = 0; i < myList.length; i++) {
//     alert('I have '+ myList[i]+' in my basket');
// }

// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Do something with the retrieved data
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });



var hotel = new Object();

   hotel.name = 'Park';
   hotel.rooms = 120;
   hotel.booked = 77;
   hotel.checkAvailability = function() {
       return this.rooms - this.booked;
   };
