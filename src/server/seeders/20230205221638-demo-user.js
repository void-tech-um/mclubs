"use strict";
const { seedClubs } = require("../seederHelpers.js/seedClubs.js");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log("Seeding clubs");

    const data = await seedClubs(100);

    await queryInterface.bulkInsert("users", data.users);
    return await queryInterface.bulkInsert("clubs", data.clubs);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("clubs", null, {});
    return await queryInterface.bulkDelete("users", null, {});
  },
};
