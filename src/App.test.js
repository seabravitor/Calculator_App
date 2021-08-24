import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

let number1;
let number2;
let operador;
let resultado;
let button;

const setValue = (element, v) => {
  fireEvent.change(element, { target: { value: v } });
};

beforeEach(() => {
  render(<App />);

  number1 = screen.getByLabelText("number1");
  number2 = screen.getByLabelText("number2");
  operador = screen.getByLabelText("operador");
  button = screen.getByLabelText("calcule");
  resultado = screen.getByLabelText("resultado");
});

test('calcular soma simples', () => {

  setValue(number1, '1');
  setValue(operador, '+');
  setValue(number2, '4');

  button.click();

  expect(resultado.textContent).toBe('Resultado: 5');
});

test('calcular subtração simples', () => {

  setValue(number1, '4');
  setValue(operador, '-');
  setValue(number2, '1');

  button.click();

  expect(resultado.textContent).toBe('Resultado: 3');
});

test('calcular soma simples', () => {

  setValue(number1, '1');
  setValue(operador, '*');
  setValue(number2, '4');

  button.click();

  expect(resultado.textContent).toBe('Resultado: 4');
});

test('calcular soma simples', () => {

  setValue(number1, '4');
  setValue(operador, '/');
  setValue(number2, '2');

  button.click();

  expect(resultado.textContent).toBe('Resultado: 2');
});

test('calcular soma simples', () => {

  setValue(number1, '150');
  setValue(operador, 'M');
  setValue(number2, '100');

  button.click();

  expect(resultado.textContent).toBe('Resultado: 50');
});
