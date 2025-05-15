import { defineComponent } from 'vue-demi';

import { formatter } from '@/utils/chart';

/** 显示数字 */
export default defineComponent({
  name: 'DigitalNumber',
  props: {
    money: Number,
    separator: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => (
      <div className={'mb-[20px]'}>
        {slots.default?.()}
        {(props.separator ? formatter(props.money ?? 0) : props.money.toString())
          .split(/(\d,)/g)
          .filter((item) => item !== '')
          .map((item) => (!item.includes(',') ? item.split('') : item))
          .flat()
          .map((item, index) => (
            <span key={index}>{item}</span>
          ))}
      </div>
    );
  },
});
