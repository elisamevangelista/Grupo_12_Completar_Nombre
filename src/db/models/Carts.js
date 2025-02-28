module.exports = (sequelize, dataTypes) => {
    let alias = 'Carts'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_sku: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        quantityItems: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        sold: {
            type: dataTypes.TINYINT(1),
            defaultValue: 0,
            allowNull: false
        },
    };
    let config = {
        tableName: 'carts',
        paranoid: true,
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    }
    const Carts = sequelize.define(alias,cols,config);

    Carts.associate = function (models) {
        Carts.belongsTo(models.Products, {
            as: "products",
            foreignKey: "product_sku"
        });

        Carts.belongsTo(models.Users, {
            as: "users",
            foreignKey: "user_id"
        });
    }

    return Carts
};