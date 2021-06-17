const express = require("express");
const router = express.Router();
const { postCat , getAllCats ,deleteCategory , editCat, getCategory  } = require("../controllers/category")
const {adminMiddleware} = require('../common-middlewares/index')
const {categoryValidation,validation} = require("../middlewares/validators/category");
const isAuth =require('../common-middlewares/index.js')


/**
 * @desc : add category
 * @method : POST
 * @path : http://localhost:7000/api/category
 * @data : req.body
 * @acess : public
 */
router.post("/create",categoryValidation(),validation,postCat);


function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      type: cate.type,
      children: createCategories(categories, cate._id),
    });
  }

  return categoryList;
}


router.get("/getcategories",getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) return res.status(400).json({ error });
    if (categories) {
      const categoryList = createCategories(categories);
      res.status(200).json({ categoryList });
    }
  });
})

/**
 * @desc : get all categories
 * @method : GET
 * @path : http://localhost:7000/api/category
 * @data : no data
 * @acess : public
 */
router.get('/', getAllCats)

/**
  * @desc : get one category
  * @method : GET
  * @path : http://localhost:7000/api/category/:_id
  * @data : req.params
  * @acess : public
  */
router.get('/:_id', getCategory)

/**
  * @desc : delete category
  * @method : DELETE
  * @path : http://localhost:7000/api/category/delete/:id
  * @data : req.params
  * @acess : public
  */


router.delete('/delete/:id', deleteCategory)

/**
  * @desc : edit category
  * @method : PUT
  * @path : http://localhost:7000/api/category/:_id
  * @data : req.params & req.body
  * @acess : public
  */
router.put('/:_id', editCat)


module.exports = router;