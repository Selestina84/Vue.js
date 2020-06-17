<template>
  <ElCard class="form">
    <ElForm :model="formData" ref="addItemForm" lable-position="top" :rules="rules">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="income" value="INCOME"/>
          <ElOption label="outcome" value="OUTCOME"/>
        </ElSelect>
      </ElFormItem>
       <ElFormItem label="Comment" prop="comment">
         <ElInput v-model="formData.comment"/>
       </ElFormItem>
        <ElFormItem label="Value" prop="value">
         <ElInput v-model.number="formData.value"/>
       </ElFormItem>
       <ElButton @click="onSubmit" type="primary" plain size="medium">Add</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    formData: {
    type: "INCOME",
    comment: '',
    value: 0
    },
    rules: {
      type: [],
      comment: [{required:true, message:'Please input comment', trigger: 'change'}],
      value: [
        {required: true, message: ' Please input value', trigger: 'change' },
        {type: 'number', message:'Value must be a number', trigger: 'change'}
      ]
    }
  }),
  methods: {
    onSubmit(){
      this.$refs.addItemForm.validate(valid=>{
        if(valid){
          this.$emit('submitForm',{...this.formData});
          this.$refs.addItemForm.resetFields();
        }
      })
    }
  }
}
</script>

<style scoped>
.form{
  max-width: 500px;
  margin: auto;
}
.type-select{
  width: 100%;
}
</style>