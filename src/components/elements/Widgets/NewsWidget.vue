<script lang="ts" setup>
import Widget from 'src/components/common/Widget.vue';

const list = [
  { title: '배우 맥컬리 컬킨 근황 ㄷㄷ...jpg' },
  { title: '핀란드 박사들에게 칼이 주어지는 이유.jpg' },
  { title: '하이힐 신고 산책하는 조권에게 눈을 못떼는 행인 ㄷㄷ....jpg' },
  { title: '카드사, 애플페이 도입 당분간 힘들듯···"리스크 방어 우선"' },
  { title: '네이버, 김범준 배민 전 대표에게 운영 맡긴다' },
  { title: '10평에서 월순수익 2천만원, 가격파괴 오마카세 초밥집의 성공비결은? ' },
];
</script>
<template>
  <Widget :title="$t('news')">
    <ul>
      <li
        v-for="{ title }, key in list"
        :key="key"
        class="w-full overflow-hidden text-ellipsis whitespace-nowrap"
      >
        <span class="overflow-hidden cursor-pointer hover:underline">{{ title }}</span>
      </li>
    </ul>
  </Widget>
</template>
<style lang="scss" scoped>
</style>
