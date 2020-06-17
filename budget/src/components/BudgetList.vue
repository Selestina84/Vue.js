<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <div class="budget-button-wrapper">
        <ElButton type="info" plain size="medium">
          All
        </ElButton>
        <ElButton type="success" plain size="medium" @click="incomeItems">
          Income
        </ElButton>
        <ElButton type="warning" plain size="medium">
          Outcome
        </ElButton>
      </div>
      <template v-if="!isEmpty">
        <BudgetListItem
          class="budget-list-item"
          v-for="(item, prop) in list"
          :key="prop"
          :item="item"
          @deleteItem="onDeleteItem"
        >
        </BudgetListItem>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";
export default {
  name: "BudgetList",
  components: {
    BudgetListItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty List"
  }),
  computed: {
   /* sortedList(){
      return this.list;
    },*/
    isEmpty(){
      return !Object.keys(this.list).length;
    }
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    incomeItems() {
      return Object.values(this.list).reduce((acc, item) => {
        if (item.type === "INCOME") {
          acc + item;
        }
      },{});
    },
  }
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
.budget-button-wrapper {
  padding: 10px 0;
}
</style>
