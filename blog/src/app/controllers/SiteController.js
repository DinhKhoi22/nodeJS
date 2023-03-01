class SiteController {
    //[GET] / news
    index(req, res) {
        res.render('site');
    }

    show(req, res) {
        res.send('New Site');
    }
}

module.exports = new SiteController();
