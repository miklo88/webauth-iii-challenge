exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "miklo", password: "password1" },
        { id: 2, username: "diesel", password: "catnip4life" },
        { id: 3, username: "anotheruser", password: "password" }
      ]);
    });
};
