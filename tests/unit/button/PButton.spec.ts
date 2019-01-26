import { shallowMount } from '@vue/test-utils';
import { PButton } from '@/components/button';

const factory = (datas = {}, props = {}) => {
  return shallowMount(PButton, {
    data() {
      return { ...datas };
    },
    propsData: { ...props },
  });
};

describe('PButton.vue', () => {
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message';
  //   const wrapper = factory(undefined, { type: 'text' });
  //   expect(wrapper.text()).toMatch(msg);
  // });

  it('primary button', () => {
    const wrapper = factory(undefined, { type: 'primary' });
    expect(wrapper).toMatchSnapshot();
  });

  it('small button', () => {
    const wrapper = factory(undefined, { size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('disabled big button', () => {
    const wrapper = factory(undefined, { size: 'large', disabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
