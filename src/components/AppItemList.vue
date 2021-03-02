<template>
  <div>
    AppItemList: {{ items }}
  </div>
</template>

<script lang="ts">

export default{

  name: 'AppItemList',
  //Props allow you to pass a value (state) from one component (parent) to another (child).
  props: ['items'],
};
</script>

<style scoped>

</style>
