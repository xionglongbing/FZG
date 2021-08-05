<template>
  <div class="mm">
    <el-container>
      <el-container class="containe">
        <el-aside width="255px">
          <!-- <ul>
            <li>最新公告</li>
            <li>新书推荐</li>
            <li>线路查询</li>
            <li>图书捐赠</li>
            <li class="active">读者留言</li>
            <li>入馆指南</li>
          </ul> -->
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

             <router-link to="/FZG_GuanCang/FZG_FaBuHistory">
            <li >信息发布</li>
            </router-link>

            <li class="active">读者留言</li>

             <router-link to="/FZG_GuanCang/FZG_RuGuan">
            <li>入馆指南</li>
            </router-link>
          </ul>
        </el-aside>
        <div class="mmain">
          <el-main class="main">
            <span class="r">
              <router-link to="/FZG_GuanCang/FZG_DuZhe">
                <button>我要留言</button>
              </router-link>
            </span>
            <el-table border :data="pagefeedback" stripe style="width: 100%">
              <el-table-column prop="author" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="time" label="来信时间" width="180">
              </el-table-column>
              <el-table-column prop="theme" label="地址"> </el-table-column>
              <el-table-column prop="content" label="地址"> </el-table-column>
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
      feedback: [],
      pagefeedback: [],
      name: "",
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
      this.currentPage=val;
      this.pagefeedback = this.feedback.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  mounted() {
    try {
      if (localStorage.getItem("feedback")) {
        this.feedback = JSON.parse(localStorage.getItem("feedback"));
        this.total = this.feedback.length;
        this.pagefeedback = this.feedback.slice(0, this.pageSize);
        console.log("feedback：", this.feedback);
      }
    } catch (error) {
      localStorage.removeItem("feedback");
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