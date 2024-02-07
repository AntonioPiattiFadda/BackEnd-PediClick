const { Model, DataTypes, Sequelize } = require('sequelize');

const SCHEDULE_TABLE = 'schedules';

const ScheduleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  day: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  firstStartAt: {
    allowNull: false,
    type: DataTypes.TIME,
  },
  firstEndAt: {
    allowNull: false,
    type: DataTypes.TIME,
  },
  secondStartAt: {
    allowNull: true,
    type: DataTypes.TIME,
  },
  secondEndAt: {
    allowNull: true,
    type: DataTypes.TIME,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Schedule extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SCHEDULE_TABLE,
      modelName: 'Schedule',
      timestamps: false,
    };
  }
}

module.exports = { SCHEDULE_TABLE, ScheduleSchema, Schedule };
