import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('GifExpertApp', () => {
  test('should match with the snapshot', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a list', () => {
    const categories = ['One Punch', 'Samurai X'];
    const wrapper = shallow(<GifExpertApp defaultState={categories} />);

    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
