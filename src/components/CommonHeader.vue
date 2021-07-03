<template>
  <header class="common-header">
    <div class="site-name">Dozi0116</div>
  </header>
</template>

<style lang="scss" scoped>
@import "src/styles/global-style";

.common-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid $color-gray;

  .site-name {
    font-weight: bold;
    font-size: $font-size-xlarge;
    color: $color-orange;
  }
}
</style>