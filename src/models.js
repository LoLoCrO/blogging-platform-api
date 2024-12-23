const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const BlogPost = sequelize.define('BlogPost', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tags: {
        type: DataTypes.JSON,
        allowNull: true,
    },
}, {
    timestamps: true,
});

module.exports = BlogPost;
