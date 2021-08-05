<template>
  <div id="background">
    <FZG_ArticleExport></FZG_ArticleExport>

    <div id="body_form">
      <div id="form_table">
        <div class="form_table_list1">
          <label>标题:</label>
          <input type="text" placeholder="" />
        </div>
        <div class="form_table_list1">
          <label>副标题:</label>
          <input type="text" placeholder="" />
        </div>
        <div class="form_table_list1">
          <label>文号:</label>
          <input type="text" placeholder="" />
        </div>
        <div class="form_table_list1">
          <label>文章关键词:</label>
          <input type="text" placeholder="" />
        </div>
        <div class="form_table_list1">
          <label>作者:</label>
          <input type="text" placeholder="" />
        </div>
        <div class="form_table_list2">
          <label>导读文件:</label>
          <input type="file" placeholder="" />
        </div>
        <div class="form_table_list1">
          <label>网页标题:</label>
          <input type="text" placeholder="" />
        </div>
        <div class="form_table_list1">
          <label>文章摘要:</label>
          <input type="text" placeholder="" />
        </div>
        <div class="form_table_list2">
          <label>文章内容:</label><br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style="margin-left: 15%"
          ></textarea>
          <!-- <input type="textarea" placeholder="" /> -->
        </div>
        <div class="form_table_list1">
          <label>发布时间:</label>
          <input type="time" placeholder="" />
        </div>
        <div
          class="form_table_list2"
          style="padding-left: 10%; padding-right: 10%"
        >
          <input type="checkbox" value="imgTitle" />
          <label for="">采用图片标题 </label>
          <input type="checkbox" value="newsChange" />
          <label for="">采用新闻跳转 </label>
          <input type="checkbox" value="guxiang" />
          <label for="">固项 </label>
          <input type="checkbox" value="plentyColumnuse" />
          <label for="">多栏目引用发布 </label>
        </div>
        <div class="form_table_list2">
          <input type="submit" value="提交" class="submitButton" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FZG_ArticleExport from './FZG_ArticleExport.vue'
export default {
  setup() {
    return {};
  },
  components:{
    FZG_ArticleExport
  }
};
</script>

<style lang="scss" scoped>
#background {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 120%;
  z-index: -1;
  position: absolute;
  background-image: url("../assets/body1.jpg");
}

#body_form {
  margin-top: 20px;
  margin-left: 12.5%;
  margin-right: 12.5%;
  padding: 10px;
  border: 1px black solid;
  background-color: rgba($color: white, $alpha: 0.9);
  height: 650px;
  width: 75%;
  border-radius: 10px;
}
#form_table {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
.form_table_list1 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  width: 50%;
  margin-right: 0px;
  float: left;
}
.form_table_list2 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  width: 100%;
  margin-right: 0px;
  float: left;
}

.submitButton {
  margin-right: 15%;
  float: right;
  width: 80px;
  height: 40px;
  border-radius: 15px;
  background-color: steelblue;
  color: white;
}
</style>