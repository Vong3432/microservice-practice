module.exports.up = (queryInterface, DataType) => {
    return queryInterface.createTable("listings", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER.UNSIGNED
        },
        title: {
            allowNull: false,
            type: DataType.STRING 
        },
        description: {
            allowNull: false,
            type: DataType.TEXT
        },
        createdAt: {
            allowNull: false,
            type: DataType.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataType.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataType.DATE
        }
    }, 
    {
        charset: "utf8"
    }
    );
};