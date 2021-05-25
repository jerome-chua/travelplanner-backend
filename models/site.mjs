export default function initSiteModel(sequelize, DataTypes) {
  return sequelize.define(
    'site',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      tripId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'trips',
          key: 'id',
        },
      },
      googleRef: {
        type: DataTypes.STRING,
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
