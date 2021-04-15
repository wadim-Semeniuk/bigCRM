<template>
  <div class="grey darken-1 empty-layout" :key="locale">
    <router-view/>
  </div>
</template>


<script>
import messages from '@/utils/messages'

export default {
  name: 'EmptyLaout',
  computed: {
    error() {
      return this.$store.getters.error
    },
    locale() {
      return this.$store.getters.info.locale
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'что-то пошло не так')
    }
  }
}
</script>
