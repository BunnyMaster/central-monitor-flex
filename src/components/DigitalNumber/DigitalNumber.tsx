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
    return () => (
      <div className={'mb-[20px]'}>
        {(props.separator ? formatter(props.money) : props.money.toString())
          .split(/(\d,)/g)
          .filter((item) => item !== '')
          .map((item) => (!item.includes(',') ? item.split('') : item))
          .flat()
          .map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        {/* {moneyStringList.value?.map((item, index) => <span key={index}>{item}</span>)} */}
      </div>
    );
  },
});
