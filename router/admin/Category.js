const express = require ('express');
const Category = require ('../../models/Category')
const slugify=require('slugify')
const router = express.Router()
const shortid = require ('shortid')


    router.post('/create',(req,res)=>{
        const categoryObj = {
            name: req.body.name,
            slug: `${slugify(req.body.name)}-${shortid.generate()}`,
        };

        /* if (req.file) {
            categoryObj.categoryImage = "/public/" + req.file.filename;
          } */

        if (req.body.parentId) {
            categoryObj.parentId = req.body.parentId;
        }

        const cat = new Category(categoryObj);
        cat.save((error, category) => {
            if (error) return res.status(400).json({ error });
            if (category) {
                return res.status(201).json({ category });
            }
            });
    })
