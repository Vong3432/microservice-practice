module.exports.up = (queryInterface, DataType) => {
    return queryInterface.createTable("users", {
        id: {
            allowNull: false,            
            primaryKey: true,
            type: DataType.UUID
        },
        email: {
            allowNull: false,
            type: DataType.STRING ,
            unique: true
        },
        passordHash: {
            allowNull: false,
            type: DataType.CHAR(64)
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

module.exports.down = queryInterface => queryInterface.dropTable("users");