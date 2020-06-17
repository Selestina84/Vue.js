<template>
  <div class="total-value">
    Balance:
    <span :class="classBalans">{{ total }}</span>
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classBalans() {
      return {
        "green": this.total > 0,
        "black": this.total === 0,
        "red": this.total < 0
      }
    }
  }
}
</script>

<style scoped>
.total-value{
  font-size: 18px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}
.total-value span {
  font-size: 20px;
  }
.green {
  color: green;
}
.red {
  color: red;
}
</style>