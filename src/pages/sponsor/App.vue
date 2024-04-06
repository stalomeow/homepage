<script setup lang="ts">
import sponsorWechatSrc from "../../assets/sponsor-wechat.png"
</script>

<template>
  <p class="title">Thanks for your support!</p>
  <img class="qr-code" :src="sponsorWechatSrc" />
  <img class="qr-code" :src="sponsorWechatSrc" />

  <p class="title">Sponsor list</p>
  <div class="sponsor-list">
    <table>
      <thead>
        <tr>
          <th style="text-align: center;">赞助者</th>
          <th style="text-align: center;">金额</th>
          <th style="text-align: center;">时间</th>
          <th style="text-align: center;">留言</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center;">ANL</td>
          <td style="text-align: center;">¥400.00</td>
          <td style="text-align: center;">2023-09-01</td>
          <td style="text-align: center;"></td>
        </tr>
        <tr>
          <td style="text-align: center;">阿海</td>
          <td style="text-align: center;">¥1.00</td>
          <td style="text-align: center;">2022-05-08</td>
          <td style="text-align: center;">高考加油！</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.title {
  font-weight: bold;
}

.qr-code {
  height: 10rem;
}

.sponsor-list {
  width: 80vw;
}
</style>
