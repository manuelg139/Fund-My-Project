const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');
////Project
// id: primary key
// name
// description
// date_created
// needed_funding
// user_id: foreign key that references User.id


class Projects extends Model {
}

Projects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: NOW(),
      allowNull: false,
      unique: false,
    },
    needed_funding: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Projects',
  }
);

module.exports = Projects;
