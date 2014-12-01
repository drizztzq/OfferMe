/*
 * GET shared page.
 */

exports.shareInfo = function(req, res) {
	var companyName = decodeURI(req.query.companyName);
	var jobName = decodeURI(req.query.jobName);
	var area = decodeURI(req.query.area);
	var salary = decodeURI(req.query.salary);
	var ability = decodeURI(req.query.ability);
	var date = decodeURI(req.query.date);	
//	var companyName = "百度移动";
//	var jobName = "安卓开发工程";
//	var area = "上海";
//	var salary = "面议";
//	var ability = "捡肥皂";
//	var date = "2014年10月31日";
	res.render('shareInfo', {
		title : companyName + jobName + '(' + area + ')' + '内部推荐',
		companyName : companyName,
		jobName : jobName,
		area : area,
		salary : salary,
		ability : ability,
		date : date
	});
};
