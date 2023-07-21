import { test, expect } from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react'
import React from 'react';

// Importamos el componente a probar.
import Component from '../src/Component';

test('Se renderiza el componente', () => {
  render(<Component nombre="Henry" />);
  expect(screen.getByText('Hola, Henry!')).toBeDefined();
});

test('Muestra el nombre recibido por props: Henry', () => {
  render(<Component nombre="Henry" />);
  expect(screen.getByText('Hola, Henry!')).toBeDefined();
});

test('El estado inicial del contador debe ser cero', () => {
  render(<Component nombre="Henry" />);
  expect(screen.getByText('0')).toBeDefined();
});

test('Al hacer click en el botón, el contador debe aumentar en +1', () => {
  render(<Component nombre="Henry" />);
  const button = screen.getByText('Haz click aquí');

  // Verificamos el valor del contador antes de hacer clic.
  expect(screen.getByText('0')).toBeDefined();

  // Hacemos clic en el botón.
  fireEvent.click(button);

  // Verificamos que el contador se haya actualizado a 1.
  expect(screen.getByText('1')).toBeDefined();

  // Hacemos clic en el botón nuevamente.
  fireEvent.click(button);

  // Verificamos que el contador se haya actualizado a 2.
  expect(screen.getByText('2')).toBeDefined();
});

test('Se muestran las etiquetas: H1, p y H3', () => {
  render(<Component nombre="Henry" />);
  expect(screen.getByRole('heading', { name: /hola, henry!/i })).toBeDefined();
  expect(screen.getByText('Bienvenido a mi componente.')).toBeDefined();
  expect(screen.getByRole('heading', { name: '0' })).toBeDefined();
});
