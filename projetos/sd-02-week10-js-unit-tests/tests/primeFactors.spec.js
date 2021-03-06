const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('testando a função primeFactors', () => {
  it('testando se ela retorna os fatores primos corretamente', () => {
    assert.deepEqual(primeFactors(100), [2, 2, 5, 5]);
    assert.deepEqual(primeFactors(54), [2, 3, 3, 3]);
    assert.deepEqual(primeFactors(55), [5, 11]);
    assert.deepEqual(primeFactors(543), [3, 181]);
  });

  it('testando o erro - números não inteiros ou outros tipos de parâmetro', () => {
    assert.throws(() => { primeFactors(10.5); }, 'Error: passe um número inteiro como parâmetro');
    assert.throws(() => { primeFactors('xablau'); }, Error);
  });
});
