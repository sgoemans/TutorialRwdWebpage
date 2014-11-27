/**
 * Created by Goemans.Stephan on 30.07.2014.
 */
var x = require('../src/js/btnHandling');
describe("Namespace ", function () {
	it("should have some variables defined...", function () {
		expect(x.toggle).toBeDefined();
		expect(x.btn).toBeDefined();
	});
});
