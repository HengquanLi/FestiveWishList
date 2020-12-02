const db = require('../models');

module.exports = function (app) {
  // GET route for getting all of the posts

  app.get('/view-wishes', (req, res) => {
    db.Wish.findAll().then((data) => {
      const hbsObject = {
        wishes: data.map(val => {
          currentObj = val.dataValues
          currentObj.item = JSON.parse(currentObj.item)
          return currentObj
        }),
      };
      console.log(hbsObject);
      res.render('view-wishlist', hbsObject);
    })
      ;
  });

  app.post('/api/wishlist', (req, res) => {
    db.Wish.create({
      wish_name: req.body.wishName,
      item: req.body.item,
    }).then((dbWish) => {
      res.json(dbWish);
    });
  });

  // app.get('/api/wishlist/:id', (req, res) => {
  //   db.Wish.findOne({
  //     where: {
  //       UserId: req.params.id,
  //     },
  //     function(data) {
  //       const hbsObect = {
  //         wishName: data.wish_name,
  //         items: data.item,
  //       };
  //       res.render('wishlist', hbsObect);
  //     },
  //   }).then((result) => {
  //     res.json({ wishes: result });
  //   });
  // });
};
