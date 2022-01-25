import { getData } from '../../helpers/getData';

describe('Debe entregarme correctamente los datos en el fetching', () => {
  test('Debe entregarme 10 elementos', async () => {
    const datos = await getData('Goku');

    expect(datos.length).toBe(10);
  });

  test('Debe entregarme 0 elementos', async () => {
    const datos = await getData('');

    expect(datos.length).toBe(0);
  });
});
