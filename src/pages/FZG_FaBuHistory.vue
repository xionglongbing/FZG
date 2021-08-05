<template>
  <div class="mm">
    <el-container>
      <el-container class="containe">
        <el-aside width="255px">
           <ul>
             <router-link to="/FZG_GuanCang/FZG_GongGao">
            <li>最新公告</li>
            </router-link>

             <router-link to="/FZG_GuanCang/FZG_XinShu">
            <li>新书推荐</li>
            </router-link>

             <router-link to="/FZG_GuanCang/FZG_XianLu">
            <li>线路查询</li>
            </router-link>
            <li class="active">信息发布</li>
             <router-link to="/FZG_GuanCang/FZG_DuZhe">
            <li>读者留言</li>
            </router-link>

             <router-link to="/FZG_GuanCang/FZG_RuGuan">
            <li>入馆指南</li>
            </router-link>
          </ul>
        </el-aside>
        <div class="mmain">
          <el-main class="main">
            <el-table border :data="pagesizeForm" stripe style="width: 100%">
              <el-table-column prop="name" label="标题" width="120">
              </el-table-column>
              <el-table-column prop="author" label="姓名" width="100">
              </el-table-column>
              <el-table-column prop="date1" label="发布时间" width="180">
              </el-table-column>
              <el-table-column prop="region" label="关键词"> </el-table-column>
              <el-table-column prop="content" label="内容" width="350"> </el-table-column>
            </el-table>
          </el-main>
        </div>
      </el-container>
    </el-container>
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      :page-sizes="[2, 5, 10, 20]"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      :total="total"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: [],
      pagesizeForm: [],
      currentPage: 1,
      total: 0,
      pageSize: 8,
    };
  },
  props: ["query"],
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.pagesizeForm = this.sizeForm.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  mounted() {
    try {
      if (localStorage.getItem("sizeForm")) {
        this.sizeForm = JSON.parse(localStorage.getItem("sizeForm"));
        this.total = this.sizeForm.length;
        this.pagesizeForm = this.sizeForm.slice(0, this.pageSize);
        console.log("sizeForm：", this.sizeForm);
      }
    } catch (error) {
      localStorage.removeItem("sizeForm");
      this.$message({
        type: "error",
        message: "数据已重置",
      });
      console.log(error);
    }
  },
};
</script>

<style>
</style>