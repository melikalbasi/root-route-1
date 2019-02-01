module.exports = function (sequelize, DataTypes) {
    var Subject = sequelize.define("Subject", {
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
        }
    });

    Subject.associate = function (models) {
        Subject.belongsTo(models.Path, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Subject;
};