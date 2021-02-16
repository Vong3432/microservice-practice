module.exports.up = (queryInterface, DataType) => {
    return queryInterface.createTable("userSessions", {
        id: {
            allowNull: false,            
            primaryKey: true,
            type: DataType.UUID
        },
        userId: {
            allowNull: false,
            references: {
                keys: "id",
                model: "users"
            },
            type: DataType.UUID
        },
        expiresAt: {
            allowNull: false,
            type: DataType.DATE
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

module.exports.down = queryInterface => queryInterface.dropTable("userSessions");