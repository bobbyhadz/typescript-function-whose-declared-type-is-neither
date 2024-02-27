export {};

// A function whose declared type is neither void nor any must return a value

// EXAMPLE 1 - Return a value that matches the specified type

const getPromise = (): Promise<number> => {
  return Promise.resolve(42);
};

// ---------------------------------------------------

// // EXAMPLE 2 - Removing the function's return type

// // 👇️ const getPromise: () => void
// const getPromise = () => {
//   Promise.resolve(42);
// };

// ---------------------------------------------------

// // EXAMPLE 3 - Dealing with complex functions with nested conditions

// // ✅ OK now
// const getNumber = (): number => {
//   function inner() {
//     if (Math.random()) {
//       return 100;
//     }

//     return 200;
//   }

//   return inner();
// };