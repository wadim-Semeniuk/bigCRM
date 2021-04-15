<template>
  <div>
  <div class="page-title">
    <h3>{{ 'Category_Title' | localize }}</h3>
  </div>
  <section>
    <Loader v-if="loading" />
    <div class="row" v-else>
      <CategoryCreate @created="addNewCategory"/>

      <CategoryEdit
        v-if="categories.length"
        :categories="categories"
        :key="categories.length + updateCount"
        @updated="updateCategories"
      />
      <p v-else class="center">{{ 'Record_NoneMessage' | localize }}</p>
    </div>
  </section>
</div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate';
import CategoryEdit from '@/components/CategoryEdit';
import Loader from '../components/app/Loader.vue';

export default {
  name: 'categories',
  metaInfo() {
    return {
      title: this.$title('Menu_Categories')
    }
  },
  data: () => ({
    categories: [],
    loading:true,
    updateCount: 0
  }),
  components: {
    CategoryCreate,
    CategoryEdit,
    Loader
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories')

    this.loading = false
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category)
    },
    updateCategories(category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      this.categories[idx].title = category.title
      this.categories[idx].limit = category.limit
      this.updateCount++
    }
  }
}
</script>