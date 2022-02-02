import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Vamos a tener una buena prueba', () => {
  const category = 'One Punch';
  const gifs = [{ id: 'ABC', url: 'https://localhost/one-punch.gif', title: 'One Punch' }];

  useFetchGifs.mockReturnValue({ data: gifs, loading: true });

  const wrapper = shallow(<GifGrid category={category} />);

  test('Debe coincidir con el snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar las imágenes cuando se va cargando', () => {});
});
