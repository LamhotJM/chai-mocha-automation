const assert = require ('chai').assert;
const sayHello = require('../app2').sayHello;
const addNumbers = require('../app2').addNumbers;

describe ('App2', function(){
	it('app should return hello function', function(){
		let result  = sayHello();
		assert.equal(result,'hello');

	});

	it('sayHello should resturn type string', function(){
	  let result =   sayHello();
	   assert.typeOf(result,'string');
    });

    it('add addNumbers should be above 5', function(){
    	let result =addNumbers(5,5);
    	assert.isAbove(result,5);
    });

    it('addNumbers return type should be addNumbers', function(){
    	var result = addNumbers(2,4);
    	assert.typeOf(result,'number');
    });
});