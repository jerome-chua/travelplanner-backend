export default function initTripModel(sequelize, DataTypes) {
  return sequelize.define(
    'trip',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      countryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'countries',
          key: 'id',
        },
      },
      totalCost: {
        type: DataTypes.INTEGER,
      },
      budget: {
        type: DataTypes.JSON,
      },
      flightDetails: {
        type: DataTypes.JSON,
      },
      tripType: {
        type: DataTypes.STRING,
      },
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      private: {
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}