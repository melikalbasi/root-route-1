module.exports = function(sequelize, DataTypes) {
  var Path = sequelize.define("Path", {
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

  Path.associate = function(models){
    Path.hasMany(models.Subject, {
      onDelete: "cascade"
    });
  }
  
  return Path; 
};
