const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  Category.findAll().then(categories => {
    res.json(categories);
  }).catch(err => res.status(500).json(err));
});

// Category get route by id
router.get('/:id', (req, res) => {
  Category.findOne({
    where:{
      id: req.params.id
    }
  }).then(category => res.json(category))
  .catch(err => res.status(500).json(err));
});

 // create a new category
router.post('/', (req, res) => {
  const { category_name } = req.body;
  Category.create({
    category_name: category_name,
  })
  .then(category => res.json(category))
  .catch(err => res.status(500).json(err));
});

// Update a category
router.put('/:id', (req, res) => {
  const categoryId = req.params.id;
  const { category_name } = req.body;

  Category.update({category_name}, {
    where: {
      id: categoryId
    }
  })
  .then(category => res.json(category))
  .catch(err => res.status(500).json(err));
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  const categoryId = req.params.id;

  Category.destroy({
    where: { id: categoryId }
  })
    .then(() => {
      res.status(204).send(); 
    })
    .catch((err) => {
      console.error('Error deleting category: ', err);
      res.status(500).json({err: 'Internal Server Error' });
    });
  
});

module.exports = router;
