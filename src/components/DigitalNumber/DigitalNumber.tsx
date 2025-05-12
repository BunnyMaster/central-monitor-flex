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
  setup(props) {
    const moneyString: string = props.separator ? formatter(props.money) : props.money.toString();
    const moneyStringList = moneyString
      .split(/(\d,)/g)
      .filter((item) => item !== '')
      .map((item) => (!item.includes(',') ? item.split('') : item))
      .flat();

    return () => (
      <>
        {moneyStringList.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </>
    );
  },
});
