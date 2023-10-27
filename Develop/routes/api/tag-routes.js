const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


// The `/api/tags` endpoint
router.get('/', (req, res) => {
  Tag.findAll().then(tags => {
    res.json(tags);
  }).catch(err => res.status(500).json(err));
});

// Find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id: req.params.id
    }
  }).then(tag => res.json(tag))
  .catch(err => res.status(500).json(err));
});

// Create a new tag
router.post('/', (req, res) => {
  const { tag_name } = req.body;
  Tag.create({
    name: tag_name,
  })
  .then(tag => res.json(tag))
  .catch(err => res.status(500).json(err));
});

// Update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  const categoryId = req.params.id;
  const { tag_name } = req.body;

  Tag.findByPk(tagId)
  .then(tag => {
    tag.name = tag_name;
    return tag.save();
  })
  .then(tag => res.json(tag))
  .catch(err => res.status(500).json(err));
});

// delete tag by its `id` value
router.delete('/:id', (req, res) => {
  const tagId = req.params.id;

  Tag.destroy({
    where: { id: tagId }
  })
    .then(() => {
      res.status(204).send(); 
    })
    .catch((err) => {
      console.error('Error deleting tag: ', err);
      res.status(500).json({err: 'Internal Server Error' });
    });
});

module.exports = router;
