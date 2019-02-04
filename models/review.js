module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        reviewer: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        review: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        score: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    return Review;
};