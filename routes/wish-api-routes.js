const db = require('../models');

module.exports = function (app) {
  app.get('/view-wishes', (req, res) => {
    db.Wish.findAll({
      where: {
        UserId: req.user.id,
      },
    }).then((data) => {
      const hbsObject = {
        wishes: data.map(val => {
          currentObj = val.dataValues
          currentObj.item = JSON.parse(currentObj.item)
          return currentObj
        }),
      };
      console.log(hbsObject);
      res.render('view-wishlist', hbsObject);
    });
  });
  app.post('/api/wishlist', (req, res) => {
    db.Wish.create({
      wish_name: req.body.wishName,
      item: req.body.item,
      UserId: req.user.id,
    }).then((dbWish) => {
      res.json(dbWish);
    });
  });
}
