const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then(categories => {
    res.json(categories);
  }).catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where:{
      id: req.params.id
    }
  }).then(category => res.json(category))
  .catch(err => res.json(err));
});

 // create a new category
router.post('/', (req, res) => {
  const { name } = req.body;
  Category.create({
    name: name,
  })
  .then(category => res.json(category))
  .catch(err => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // update -- method names
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // destroy -- method names
});

module.exports = router;
