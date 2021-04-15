<template>
  <div class="">
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>{{ 'History_Amount' | localize }}</th>
        <th>{{ 'History_Date' | localize }}</th>
        <th>{{ 'History_Category' | localize }}</th>
        <th>{{ 'History_Type' | localize }}</th>
        <th>{{ 'History_Open' | localize }}</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(record, idx) of records" :key="record.id">
        <td>{{ idx +1 }}</td>
        <td>{{ record.amount | currency('RUB')}}</td>
        <td>{{ record.date  | date('datetime')}}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <span :class="[record.typeClass]" class="white-text badge ">{{ record.typeText }}</span>
        </td>
        <td>
          <button
            class="btn-small btn"
             @click="$router.push({
                      path: '/detail/' + record.id,
                    })"
            v-tooltip="localeTooltip"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'

export default {
  props: {
    records: {
      required: true,
      type: Array
    }
  },
  computed: {
    localeTooltip() {
      return localizeFilter('History_Tooltip')
    }
  }

}
</script>
