const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then(categories => {
    res.json(categories);
  }).catch(err => res.status(500).json(err));
});

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
  const { name } = req.body;
  Category.create({
    name: name,
  })
  .then(category => res.json(category))
  .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;

  Category.findByPk(categoryId)
  .then(category => {
    category.name = name;
    return category.save();
  })
  .then(category => res.json(category))
  .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // destroy -- method names
});

module.exports = router;
