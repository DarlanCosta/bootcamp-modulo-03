import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
  }
}
