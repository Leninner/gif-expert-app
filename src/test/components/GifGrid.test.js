import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

describe('Vamos a tener una buena prueba', () => {
  const category = 'One Punch';

  const wrapper = shallow(<GifGrid category={category} />);

  test('Debe coincidir con el snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar las imágenes cuando se va cargando', () => {});
});
