<script>

export default {
  name: 'Button',
  props: {
    text: String,
  },
};

</script>

<template>
  <button class="btn" v-html="text"></button>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.btn {
  background-color: $btn-primary;
  border: none;
  color: $header-font;
  font-weight: 700;
  padding: 16px 42px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.4s, color 0.4s;
}

.large {
  padding: 16px 68px;
}

.xlarge {
  padding: 16px 76px;
}

.btnone:hover {
  background-color: $bg-primary;
  color: $btn-primary;
}

.btntwo:hover {
  background-color: $btn-secondary;
}
</style>