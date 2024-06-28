console.log("console.log\n", "We have added a 'break' so that we return early", "\n\n");
console.warn("console.warn\n", "The break is not necessary, use 'return' instead", "\n\n");
console.error("console.error\n", new Error("Illegal operation, aborting", "\n\n"));
console.info("console.info\n", "The operation was successful\n\n");
console.debug("console.debug\n", "onCreate() called with", { intent: "intent.start.tracker" }, "\n\n");

const doe = {
  name: "John Doe",
  age: 56,
  address: {
    city: "Paris",
    zip: 75000,
    street: "6 rue de la Liberté",
    country: "France",
  },
};

console.log("user", doe, "\n\n");

const alice = {
  name: "Alice Doe",
  age: 87,
  address: {
    city: "Lyon",
    zip: 75000,
    street: "6 boulevard de l'Université",
    country: "France",
  },
};

const users = [doe, alice];
console.log("console.table");
console.table(users);
