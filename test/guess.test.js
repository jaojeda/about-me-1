import compareNumbers from '../src/compareNumbers.js';

const test = QUnit.test;

test('smaller guess is -1', (assert) =>{
    //Arrange
    // Set up your parameters and 
    const guess = 1;
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, 5);

    //Assert
    assert.equal(result, expected);
});

test('bigger guess is 1', (assert) =>{
    //Arrange
    // Set up your parameters and 
    const guess = 20;
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, 5);

    //Assert
    assert.equal(result, expected);
});

test('equal guess is 0', (assert) =>{
    //Arrange
    // Set up your parameters and 
    const guess = 14;
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, 14);

    //Assert
    assert.equal(result, expected);
});
