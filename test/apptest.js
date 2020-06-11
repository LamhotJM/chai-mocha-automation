const assert = require ('chai').assert;
const app = require('../app');

describe('App', function()
{
	it('app should resturn hello', function() {
		assert.equal(app(),'hello');
	});

});