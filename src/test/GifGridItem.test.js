import { GifGridItem } from '../components/GifGridItem';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Debe estar en el documento', () => {
  // Esta prueba nos sirve para analizar si el componente coincide con el snapshot

  const title = 'Titulo';
  const url = 'https://localhost/imagen.jpg';

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar la imagen correctamente', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
  });

  test('Debe mostrar la clase correctamente', () => {});
});
