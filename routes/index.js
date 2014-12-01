var fs = require('fs');

/*
 * GET weixin page.
 */
exports.index = function(req, res) {
	var curDate = req.query.year + req.query.month + req.query.day;
	var displayDate = req.query.year + "年" + req.query.month + "月" + req.query.day + "日";
	fs.readFile('public/text/' + curDate + '.txt', 'utf-8',
			function(err, data) {
				if (err) {
					console.error(err);
				} else {
					var jsonObj = JSON.parse(data);
					res.render('index', {
						title : jsonObj.title,
						content : jsonObj.content,
						date : curDate,
						displayDate : displayDate,
						year : req.query.year,
						month : req.query.month,
						day : req.query.day
					});
				}
			});
};