import { getThrowFromNumber } from '../src/get-throw.js';

const test = QUnit.test;

test('0 is rock', function (assert) {
    //Arrange
    // Set up your parameters and 
    let num = 0;
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(num);

    //Assert
    assert.equal(result, expected);
});
test('1 is paper', function (assert) {
    //Arrange
    // Set up your parameters and 
    let num = 1;
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(num);

    //Assert
    assert.equal(result, expected);
});
test('2 is scissors', function (assert) {
    //Arrange
    // Set up your parameters and 
    let num = 2;
    const expected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(num);

    //Assert
    assert.equal(result, expected);
});