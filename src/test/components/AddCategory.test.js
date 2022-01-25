import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente Add Category', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe funcionar el onChange en el input', () => {
    const input = wrapper.find('ForwardRef(TextField)'); // con esto se busca el input con MUI
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });
    const parent = wrapper.find('p');

    expect(parent.text().trim()).toBe(value);
  });

  test('No debe postear la información al hacer submit', () => {
    const form = wrapper.find('form');

    form.simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
