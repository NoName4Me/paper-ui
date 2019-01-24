import { shallowMount } from '@vue/test-utils';
import { PButton } from '@/components/button';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(PButton, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
