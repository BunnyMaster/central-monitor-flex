import formatter from '@/utils/digte-formatter';

/** 显示金额 */
export const displayContent = (money) => {
  const moneyString: string = formatter(money);
  const moneyStringList = moneyString
    .split(/(\d,)/g)
    .filter((item) => item !== '')
    .map((item) => (!item.includes(',') ? item.split('') : item))
    .flat();

  return (
    <>
      <span>¥</span>
      {moneyStringList.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </>
  );
};
