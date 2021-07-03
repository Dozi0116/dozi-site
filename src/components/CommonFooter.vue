<template>
  <footer class="common-footer">
    <p>Copyright © 2021 Dozi All Rights Reserved.</p>
    <li class="external-links">
      <ul class="external-link">
        <a target="_blank" href="https://twitter.com/doratarou7">
          あそびの<fa-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="icon"/>
        </a>
      </ul>
      <ul class="external-link">
        <a target="_blank" href="https://twitter.com/01_G_16">
          まじめな<fa-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="icon"/>
        </a>
      </ul>
      <ul class="external-link">
        <a target="_blank" href="https://github.com/Dozi0116">
          かいはつ<fa-icon :icon="{ prefix: 'fab', iconName: 'github' }" class="icon"/>
        </a>
      </ul>
    </li>
  </footer>
</template>

<style lang="scss" scoped>
@import "src/styles/global-style";

.external-links {
  list-style: none;
  display: flex;
  justify-content: center;

  .external-link {
    .icon {
      padding-left: $spacing-xsmall;
    }

    &:not(:first-child) {
      padding-left: $spacing-default;
    }
  }
}
</style>
