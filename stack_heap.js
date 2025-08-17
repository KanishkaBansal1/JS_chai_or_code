//stack(for primitive data types) and heap(for non primitive data types) memory allocation in javascript

// 1. Stack Memory
// Stores: Primitive values (numbers, booleans, strings, null, undefined) and function call info.
// Organization: Works like a stack of plates — LIFO (Last In, First Out)
// Size: Usually smaller and faster.
// Allocation: Done automatically when functions are called.
// Lifetime: Data in the stack exists only while the function is running; it’s cleaned up when the function returns.
// Access speed: Very fast.


let name="kanishka"; // stored in stack memory
let name2= name;
name2="kritika";
console.log(name); // "kanishka" - original value remains unchanged
console.log(name2); // "kritika" - new value assigned to name2



// 2. Heap Memory
// Stores: Objects, arrays, functions, and other reference types.
// Organization: Unstructured, managed dynamically — memory is allocated and freed as needed.
// Size: Generally larger but slower to access compared to stack.
// Allocation: Done dynamically when objects or reference types are created.
// Lifetime: Data in the heap exists as long as there are references to it; garbage collected automatically when no longer needed.
// Access speed: Slower than stack due to pointer dereferencing and dynamic allocation overhead.


let user={
    name: "kanishka",
    age: 25
}
let user2=user; // user2 is a reference to the same object in heap memory
user2.age=30; // modifying the object through user2
console.log(user.age); // 30 - original object is modified

