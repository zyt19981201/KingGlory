<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="items" >
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <!-- <el-table-column prop="parent.name" label="上级分类"></el-table-column> -->
      <el-table-column prop="title" label="文章标题"></el-table-column>
      <!-- <el-table-column prop="body" label="文章内容"></el-table-column> -->
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/articles/edit/${scope.row._id}`)"
          >
            编辑
          </el-button>
          <el-button type="danger" size="small" @click="remove(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    //获取分类数据
    async fetch() {
      const res = await this.$http.get("rest/articles");
      this.items = res.data;
    },
    // 删除分类数据
    async remove(row) {
      this.$confirm(`是否确定删除文章"${row.title}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const res = await this.$http.delete(`rest/articles/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style >
</style>