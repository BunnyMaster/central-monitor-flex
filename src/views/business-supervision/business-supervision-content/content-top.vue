<script lang="tsx" setup>
const list = [
  {
    title: '今日出口额 / 万元',
    amount: 593,
    detail: [
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
    ],
  },
  {
    title: '今日货量/吨',
    amount: 593,
    detail: [
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
    ],
  },
  {
    title: '今日进出车辆/辆',
    amount: 593,
    detail: [
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
      { name: '品类1', amount: 34 },
    ],
  },
];

const contentEl = () => {
  return (
    <>
      {list.map((item, index) => (
        <li key={index}>
          <div className="business-supervision__content-cards-text">
            <h1>{item.title}</h1>
            <strong>{item.amount}</strong>
            <section>
              {item.detail.map((item) => (
                <span>
                  {item.name}:{item.amount}万元
                </span>
              ))}
            </section>
          </div>
          <img
            alt="card-1"
            src={
              new URL(
                `../../../assets/images/business-supervision/bg/content/bg-card-${index + 1}.png`,
                import.meta.url
              ).href
            }
          />
        </li>
      ))}
    </>
  );
};
</script>

<template>
  <ul class="business-supervision__content-cards">
    <component :is="contentEl()" />
  </ul>
</template>

<style lang="scss" scoped>
.business-supervision__content-cards {
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 33px 43px 27px 23px;
    width: 243px;
    height: 184px;
    color: #fff;
    background: #19abdd;
    border-radius: 5px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &-text {
    z-index: 1;

    h1 {
      font-size: 15px;
    }

    strong {
      font-size: 45px;
      font-weight: bold;
    }

    section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 13px;
    }
  }
}
</style>
