const Course = require('../models/Courses');
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    //[GET] / news
    async index(req, res, next ) {

        // Course.find({}, (err, courses) => {
        //     if(!err) {
        //         res.json(courses)
        //     } else{
        //         res.status(400).json({ error: 'Err' });
        //     }
        // });
        
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        //   } catch (err) {
        //     res.status(400).json({ error: 'Err' });
        //   }

        Course.find({})
          .then(courses => {
            res.render('home', { 
              courses: multipleMongooseToObject(courses)
            });
          })
          .catch(next)

        // res.render('home');
    }

    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
