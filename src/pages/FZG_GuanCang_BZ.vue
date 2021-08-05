<template>
  <div>
    
    <el-table :data="pageSystemmenu" stripe style="width: 100%">
      <el-table-column prop="name" label="报纸----题名" width="180"> </el-table-column>
      <el-table-column prop="CallNumber" label="索书号" width="180"> </el-table-column>
      <el-table-column prop="ResponsiblePerson" label="责任者"> </el-table-column>
      <el-table-column prop="press" label="出版社"> </el-table-column>
      <el-table-column prop="date" label="出版日期"> </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="totalPage*10"
      :page-size="10"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      systemmenu: [],
      pageSystemmenu: [],
      currentPage: 0,
      totalPage: 0,
      pageSize:10
    };
  },

  mounted() {
    console.log('99999999');
    const that = this;
    axios.get("http://localhost:8080/BZ.json").then(
      function (success) {
      console.log('safdsfsdf')
        that.systemmenu = success.data.RECORDS;
        // console.log(Math.ceil(2.5));//得出3
        that.totalPage = Math.ceil(that.systemmenu.length / that.pageSize);
        that.pageSystemmenu = that.systemmenu.slice(0,that.pageSize);
      },
      function (error) {
        console.log('失败');
        console.log(error);
      }
    );
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.pageSystemmenu = this.systemmenu.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
};
</script>

<style>
</style>