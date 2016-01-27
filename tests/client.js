/*
Place here your client tests
*/
describe('TaskClient', function() {
	describe('getDaysToEnd', function () {
		it('should return 5 in endDate is in 5 days', function () {
			var date = new Date();
			date.setDate(date.getDate() + 5);
			assert.equal(Task.getDaysToEnd({endDate:date}),5);
		});
	});
});
