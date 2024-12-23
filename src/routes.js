const express = require('express');
const BlogPost = require('./models');
const { Sequelize } = require('sequelize');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { title, content, category, tags } = req.body;
        if (!title || !content || !category) {
            return res.status(400).json({ error: 'Title, content, and category are required.' });
        }
        const post = await BlogPost.create({ title, content, category, tags });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Error creating post.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, category, tags } = req.body;
        const post = await BlogPost.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        await post.update({ title, content, category, tags });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Error updating post.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = await BlogPost.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        await post.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting post.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = await BlogPost.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching post.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const { term } = req.query;
        const whereClause = term ? {
            [Sequelize.Op.or]: [
                { title: { [Sequelize.Op.like]: `%${term}%` } },
                { content: { [Sequelize.Op.like]: `%${term}%` } },
                { category: { [Sequelize.Op.like]: `%${term}%` } },
            ],
        } : {};
        const posts = await BlogPost.findAll({ where: whereClause });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching posts.' });
    }
});

module.exports = router;
