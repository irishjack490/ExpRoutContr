module.exports ={
    index,
    show
};

const Eatery = require('../models/eatery');

function index(req, res){
    //console.log('Index route called');
    const eateries = Eatery.getAll();
    //console.log('Eateries:', eateries);
    res.render('eateries/index', { eateries });
}

function show(req, res) {
    //console.log('Eateries:', eateries);
    const eatery = Eatery.getOne(req.params.id);
    //console.log('Eatery:', eatery);
    res.render('eateries/show', { eatery });
  }
  