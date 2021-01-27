// class PersistantArray {
//     constructor(items = []) {
//         this.persistantArray = items;
//     }

//     push(newItem) {
//         return new PersistantArray(this.persistantArray.concat(newItem));
//     }

//     pop() {
//         let poppedArray = [...this.persistantArray]
//         poppedArray.pop()
//         return new PersistantArray(poppedArray);
//     }
// }

// const a = new PersistantArray([1, 2, 3]);
// console.log("A", a);
// const b = a.push(4);

// console.log("A", a);
// console.log("B", b);

// const c = a.pop();
// console.log("A", a);
// console.log("B", b);
// console.log("C", c);

const map1 = Immutable.Map({
    name: "Wash",
    ship: {
        name: "Serenity",
        class: "Firefly"
    },
    role: "Pilot",
    favoriteThing: {
        item: "Toy",
        details: {
            type: "Toy Tyrannosaurus Rex"
        }
    }
})

const map2 = map1.set("b", 50);
map1.get("b");
map2.get("b");
console.log(map1.get("b"));
console.log(map2.get("b"));

console.log(map1.equals(map2));

const state1 = Immutable.Map({a: 1, b: 2, c: 3, d: 4});
const state2 = Immutable.Map({c: 10, a: 20, t: 30});
const obj = {d: 100, o: 200, g: 300};
const map3 = state1.merge(state2, obj);
console.log(map3)