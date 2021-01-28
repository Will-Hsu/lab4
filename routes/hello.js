
/*
 * GET home page.
 */

/*exports.view = function(req, res){
  res.render('index', {
  	'name': '',
  });
};*/

exports.view = function(req, res){
  var nameToShow = req.params.userName;
  res.render("hello", { // or index?
    "name": nameToShow,
    "userName" : "msb",
    "firstName": "Michael"
  });
};
