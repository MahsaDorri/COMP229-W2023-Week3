let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Books
let Book = require('../models/book');

/* Get Route for the Book list page - READ OPERATION    */
router.get('/',(req, res, next) => {
    Book.find((err, BookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(Booklist)

           res.render('book',{title: 'Book List', BookList: BookList})
        }   
    });
});
module.exports = router;