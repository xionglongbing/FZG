<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="发布日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="标题" width="180"> </el-table-column>
      <el-table-column prop="address" label="内容"> </el-table-column>
      <el-table-column prop="button" label="操作">
        <template scope="scope">
          <el-button
            size="medium"
            type="success"
            @click="del(scope.$index)"
            round
            >删除</el-button
          >
          <el-button
            size="medium"
            type="warning"
            @click="initupdate(scope.$index)"
            round
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button
      size="medium"
      type="primary"
      @click="dialogFormVisible = true"
      round
      >添加</el-button
    >
             <router-link to="/FZG_GuanCang/FZG_FaBu">
<el-button
      size="medium"
      type="primary"
      round
      >返回</el-button
    >
            </router-link>

    <el-dialog title="添加信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="发布日期" :label-width="formLabelWidth">
          <el-input
            type="date"
            v-model="form.date"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改信息" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
        <el-form-item label="发布日期" :label-width="formLabelWidth">
          <el-input
            type="date"
            v-model="form1.date"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form1.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="form1.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="update()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "展示",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "展示",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "展示",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "展示",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      myindex: "",
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        date: "",
        name: "",
        address: "",
      },
      form1: {
        date: "",
        name: "",
        address: "",
      },
      formLabelWidth: "70px",
    };
  },
  created() {
    let obj = sessionStorage.getItem("tableData");
    if (obj != null) {
      // 从缓存中获取，把json字符串先转换成对象数组
      this.tableData = JSON.parse(obj);
    } else {
      this.init();
    }
  },
  methods: {
    add() {
      this.tableData.push(this.form);
      // 更新缓存
      sessionStorage.setItem("tableData", JSON.stringify(this.tableData));
      this.form = new Object();
      this.dialogFormVisible = false;
    },

    del(index) {
      this.tableData.splice(index, 1);
      // 更新缓存
      sessionStorage.setItem("tableData", JSON.stringify(this.tableData));
    },

    //数据初始化
    initupdate(index) {
      // 打开修改的模态窗口
      this.dialogFormVisible1 = true;
      this.myindex = index;
      this.form1 = this.tableData[index];
      console.log(this.form1);
    },

    update() {
      this.tableData[this.myindex] = this.form1;
      console.log(this.form1);
      // 更新缓存
      sessionStorage.setItem("tableData", JSON.stringify(this.tableData));
      this.dialogFormVisible1 = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>