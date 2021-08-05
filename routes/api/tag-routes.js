const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productTagData = await ProductTag.findAll();
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
ProductTag.findByPk(req.params.id, { 
    include: [
      {
        model: Product
    },
  ],
   })
   .then((findTag) => res.status(200).json(findTag)
   .catch((err) => {
     res.status(500).json(err);
   }));
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const productTagData = await ProductTag.create(req.body);
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  ProductTag.update(
    {
   
      id: req.body.id,
      
    },
    {
     
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedProductTags) => {
    
      res.json(updatedProductTags);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const productTagData = await ProductTag.destroy({
      where: {
        id: req.params.id
      }
});
if (!productTagData) {
  res.status(404).json({ message: 'No Product found with this id!' });
  return;
}

res.status(200).json(categoryData);
} catch (err) {
res.status(500).json(err);
}

});

module.exports = router;
