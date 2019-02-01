module.exports = function (sequelize, DataTypes) {
    var Resource = sequelize.define("Resource", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        link: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        }
    });

    Resource.associate = function (models) {
        Resource.belongsTo(models.Subject, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Resource;
};