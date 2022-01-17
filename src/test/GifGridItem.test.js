import { GifGridItem } from '../components/GifGridItem';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Debe estar en el documento', () => {
  // Esta prueba nos sirve para analizar si el componente coincide con el snapshot
  test('Debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifGridItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
