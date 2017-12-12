import { expect } from 'chai';
import index from '../lib/index'
import { generateRandomNumbers, generateRandomLetters } from '@valentinovtino/gen-random'


describe('Example Test File', () => {
  it('should generate random numbers', () => {
    let array = generateRandomNumbers(500, 4000);

    expect(array.length).to.equal(500);
  })
  it('should generate random letters', () => {
    let array = generateRandomLetters(500);

    expect(array.length).to.equal(500);
  })
})

