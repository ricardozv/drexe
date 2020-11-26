//migrations 

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },

      rg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      adress: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },

      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  }
};
