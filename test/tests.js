import isYes from '../src/isYes.js';

const test = QUnit.test;

test('yes is true', function(assert) {
    //Arrange
    // Set up your parameters and 
    const text = 'yes'
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text)

    //Assert
    assert.equal(result, expected);
});

test('y is true', function(assert) {
    //Arrange
    // Set up your parameters and 
    const text = 'y';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('n is false', function(assert) {
    //Arrange
    // Set up your parameters and 
    const text = 'n';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});
