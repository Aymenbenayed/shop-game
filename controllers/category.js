const Category = require ("../models/Category")
const slugify = require('slugify')
const shortid = require ('shortid')
/************************Categories***************************/ 
/**
* add category
*  */


exports.postCat=async(req,res)=>{
    try {
    const { name ,parentId , categoryImage} = req.body
        // handling errors : email & name are required
        if (!name) {
        res.status(400).send({ msg: 'Category added succefully !!!' })
        return;
        }
        // handling errors : test if Category already exist with name
        const category = await Category.findOne({ name })
        if (category) {
            res.status(400).send({ msg: 'Category already exist !!!' })
        return;}
        /* if (req.body.parentId) {
            category.parentId = req.body.parentId;
        } */
        // create and save the new category
    const newCategory = new Category({ name , slug: `${slugify(req.body.name)}-${shortid.generate()}` , parentId , categoryImage })
    await newCategory.save()
        res.status(200).send({ msg: 'Category added successfully ...', newCategory })
    } catch (error) {
        res.status(500).send({ msg: `impossible to add new Category ${error}` })
    }
    }
    
/**
 * GET all
 *  */
exports.getAllCats = async (req, res) => {
    try {
        
        const listCategories = await Category.find()
        res.status(200).send({ msg: 'This is the list of categories ...', listCategories })
    } catch (error) {
        res.status(400).send({ msg: `Can not get all categories !! ${error}`})
    }
    }


/**
 * delete category
 *  */
exports.deleteCategory = async (req, res) =>{
    try {
        const catToDelete = await Category.findById({_id : req.params.id});
        await Category.deleteOne({_id : req.params.id})
        res.status(200).send({msg : 'Category is Deleted ...'})
    } catch (error) {
        res.status(400).send({msg : "Can Not Deleted Category with this id !!!", error})
}
}


/**
 * edit category
 *  */
exports.editCat = async (req, res) => {
    
    const { _id } = req.params
    try {
        const catToEdit = await Category.updateOne({ _id }, { $set: { ...req.body } })
      // console.log(userToEdit)
        if (!catToEdit.nModified) {
        res.status(400).send({ msg: 'Category already updated ..', catToEdit })
        return
        }
        res.status(200).send({ msg: 'Category updated ..', catToEdit })
    } catch (error) {
        res.status(400).send({ msg: `Can not edit category with this id !! ${error}` })
    }
}


/**
* GET one contact
*  */
exports.getCategory = async (req, res) => {
    try {
            const { _id } = req.params
            const categoryToFind = await Category.findOne({ _id })
            console.log(categoryToFind)
            res.status(200).send({ msg: 'I find the category ...', categoryToFind })
    } catch (error) {
            res.status(400).send({ msg: 'Can not get category with this id !!', error })
        }
}