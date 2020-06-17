<template>
  <div class="budget-list-item" :class="iconsClass">
    <span class="budget-comment"> {{ item.comment }}</span>
    <span class="budget-value" :class="fontColorClass"> {{ item.value }}</span>
    <ElButton type="danger" size="mini" @click="deleteItem(item.id)">
      Delete
    </ElButton>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    iconsClass(){
      return {
        "el-icon-top": this.item.type === "INCOME",
        "el-icon-bottom": this.item.type === "OUTCOME"
      }
    },
    fontColorClass(){
      return {
        "green": this.item.type === "INCOME",
        "red": this.item.type === "OUTCOME"
      }
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    }
  }
}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
.budget-list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin: 0 20px 0 auto;
}
.budget-comment{
  padding: 0 0 0 10px;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>