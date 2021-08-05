<template>
    <div>
<span style="font-size: 26px;color:#2b4490; font-weight: bolder;margin-left:20px">信息发布</span>
<!-- <router-link to="/FZG_GuanCang/FZG_ShenHe"> 
    <span style="color:black;font-size:25px;text-decoration:underline;float:right">
        信息审核
        </span> 
    </router-link> -->
<hr>
<div class="div2">
  <img style="width:100%;" src="../assets/FZG4.png" alt="">
</div>
<div class="div3">
  <img style="width:100%;" src="../assets/FZG6.png" alt="">
</div>

<div class="div1">
<el-form ref="form" :model="sizeForm" label-width="80px" size="small">
  <el-form-item label="标题">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
   <el-form-item label="副标题">
    <el-input v-model="sizeForm.subhead"></el-input>
  </el-form-item>
   <!-- <el-form-item label="文号">
    <el-input v-model="sizeForm.num"></el-input>
  </el-form-item> -->
    <el-form-item label="关键词">
    <el-input v-model="sizeForm.keyword"></el-input>
  </el-form-item>
    <el-form-item label="作者">
    <el-input v-model="sizeForm.author"></el-input>
  </el-form-item>
  <el-form-item label="文章类型" >
      <div style="float:left">
          <el-select v-model="sizeForm.region" placeholder="请选择文章类型">
      <el-option label="公告" value="公告"></el-option>
      <el-option label="其他" value="其他"></el-option>
    </el-select>
      </div>
    
  </el-form-item>
   <el-form-item label="文章摘要">
    <el-input v-model="sizeForm.sum"></el-input>
  </el-form-item>
   <el-form-item label="文章内容">
    <el-input v-model="sizeForm.content"></el-input>
  </el-form-item>
  
  <el-form-item label="发布权限">
      <div style="float:left">

    <el-radio-group v-model="sizeForm.resource" size="medium">
      <el-radio border label="个人"></el-radio>
      <el-radio border label="全体"></el-radio>
    </el-radio-group>
      </div>

  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">立即发布</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

</div>
    <hr style="height: 3px; border: none; border-top: 3px double #f47920;margin-top:530px" />


</div>

</template>

<script>
    export default {
       data() {
      return {
        sizeFormstorage:[],
        sizeForm: {
          subhead:'',
          num:'',
          keyword:'',
          author:'',
          name: '',
          region: '',
          sum:'',
          content:'',
          date1: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        
        if (!localStorage.getItem("sizeForm")) {
          this.sizeForm.date1=new Date().toLocaleString();
        this.sizeFormstorage.push(this.sizeForm);
        localStorage.setItem("sizeForm", JSON.stringify(this.sizeFormstorage));
      } else {
        this.sizeFormstorage = JSON.parse(localStorage.getItem("sizeForm"));
          this.sizeForm.date1=new Date().toLocaleString();
        this.sizeFormstorage.push(this.sizeForm);
        localStorage.setItem("sizeForm", JSON.stringify(this.sizeFormstorage));
        console.log(localStorage.getItem("sizeForm"));
      }
      this.$router.push('/FZG_GuanCang/FZG_FaBuHistory');
      }
    }
    }
</script>

<style lang="scss" scoped>
.div1{
  position: absolute;
  left: 325px;
  width: 600px;
  border-top: 5px groove #757bd4;
  border-left: 5px groove #757bd4;
  border-right: 5px ridge  #757bd4;
  border-bottom: 5px ridge  #757bd4;

}
.div2{
  position: absolute;
  left: 30px;
// float: left;
  // margin-top: 20px;
  // margin-left: -900px;
}
.div3{
  position: absolute;
  left: 960px;
}
</style>