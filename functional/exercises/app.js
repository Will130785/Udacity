// const asteroids = api.near_earth_objects['2019-12-02']
// const averageAbsoluteMagnitude = asteroids.reduce((acc, curr, i, arr) => {
//     // at the very last item, we take the sum of all absolute magnitudes and divide by the total number of items
//    if (i + 1 == arr.length) {
//      return acc / arr.length
//    }

//    // averages are a great use case for the reduce method, because we need to find the sum of a value of all items in a group
//    return acc += curr['absolute_magnitude_h']
// }, 0)

//  console.log(averageAbsoluteMagnitude)

// // The object in the nasa_near_earth_object_API.txt is a copy of real API response from the NASA Near-Earth Object API. 
// // Find the following from the API:
// function loadData() {
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", "api.json", true);

//     xhr.onload = function() {
//         if(this.status === 200) {
//             const data = JSON.parse(this.responseText);

//             data.near_earth_objects["2019-12-02"].forEach(item => {

//                 const missDist = item.close_approach_data[0].miss_distance.miles;

//                 if(missDist < 900000) {
//                     console.log(item.id, item.name, item.estimated_diameter.miles, item.close_approach_data[0].miss_distance.miles);
//                 }
//             })
//             // const res = data.near_earth_objects["2019-12-02"].length
//             // console.log(data);

//             // console.log(res);
//         }
//     }

//     xhr.send();
// }

// console.log(loadData());
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count
//const data = fetch("nasa_near_earth_object_API.txt");

// Hazardous -----------------------------------------------
// 2. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous


// Too Close for Comfort -----------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles


// Alert ---------------------------------------------------
// 4. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth. 

//immutablejs.js
// PART 1. Getting and Setting values
// Given the following object, make an update that turns name to 'Mal' and role to 'Captain'

const state1 = Immutable.Map({ 
  name: 'Wash',
  ship: {
      name: 'Serenity',
      class: 'Firefly'
  },
  role: 'Pilot',
  favorite_thing: {
      item: "Toy",
      details: {
          type: 'Toy Tyrannosaurus Rex'
      }
  }
});

// Your Code

// -----------------------------------------------------------------
const state2 = state1.set("name", "Mal");
const state3 = state2.set("role", "Captain")
// console.log(state3)

// PART 2. More with objects
// This is a normal javascript object. It is very different from an Immutable Map
const obj = { d: 100, o: 200, g: 300 };

// But thankfully, normal javascript objects are still valid in Immutable
// Notice that here we can merge a normal object into an Immutable Map
const map3 = state1.merge(state2, obj);

// But also notice how different the two are when we console log map3 
console.log(obj)

// YOUR TURN --------------------------------------------------------------
// Can you locate the contents of our variable 'obj' inside the Immutable Map map3?
console.log(map3)

// PART 3. Arrays and Immutable Lists

// An immutable array is called a LIST, and is declared like this:
const numbers = List([1, 2, 3]);

// We can turn normal JS arrays into Immutable Lists like this:
const plainArray = [ 1, 2, 3, 4 ]
const listFromPlainArray = List(plainArray)
console.log(listFromPlainArray)

// we can declare a new Immutable List
const myList = List([ 'stuffed t-rex' ]);
console.log(Array.from(myList));

// and we can use the set method again to add or update values. Just provide the index first and value second
const myList1 = myList.set(1, 'toy lightsaber');
console.log(Array.from(myList1)); // [ "stuffed t-rex", "toy lightsaber" ]

// but, in order to not need to supply the index, we can also add new values with push
const myList2 = myList1.push('Picard bobblehead')
console.log(Array.from(myList2));

// YOUR TURN --------------------------------------------------------------------------

// 1. Turn the following array into an Immutable array
// 2. Add a character

// Your code