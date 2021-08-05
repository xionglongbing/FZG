<template>
  <div>
    <el-container>
      <el-header>
        <span style="font-family:黑体;font-style:italic;font-size:40px;float:left;color:#ffd400;font-weight:bolder">活动添加</span>
        <div style="float:right" class="ui action input">
          <!-- <input type="text" placeholder="搜索..." /> -->
          <el-input style="width:200px" v-model="input" placeholder="请输入内容"></el-input>
          <el-button type="primary" >搜索</el-button>
          <!-- <button class="ui button">搜索</button> -->
        </div>
      </el-header>

      <el-container>
        <el-aside width="300px">
<div class="demo-image__placeholder">
  <div class="block">
    <!-- <span class="demonstration">自定义</span> -->
    <el-image :src="src">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
  </div>
</div>

        </el-aside>
        <el-main>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域" prop="region">
    <el-select style="float:left" v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送" prop="delivery">
    <el-switch style="float:left;margin-top:10px" v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质" prop="type">
    <el-checkbox-group style="float:left" v-model="ruleForm.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group style="float:left;margin-top:10px"  v-model="ruleForm.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        src:"https://imgpub.chuangkit.com/designTemplate/2019/08/20/482290268_thumb?v=1587368040000&x-oss-process=image/resize,w_600/sharpen,100/format,webp",
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

  

</script>

<style lang="scss" scoped>

.el-header {
  background-color: #25a1a1;
  color: #333;
  margin-top: -60px;
  text-align: center;
  margin-left: -8px;
  width: 102%;
  height: 100px;
  // margin-bottom: 10px;
  line-height: -20px;
//   padding-top: 200px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  margin-left: -8px;
  width: 102%;
  height: 581px;
  // line-height: 400px;
  
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // margin-left: -10px;
  margin-right: -10px;
  height: 581px;

  // text-align: center;
  // line-height: 400px;

}

</style>