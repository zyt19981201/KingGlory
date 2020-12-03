<template>
  <div class="categoryEdit">
    <h1>{{ id ? "编辑" : "新建" }}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i>
          添加广告</el-button
        >
        <el-row type="flex, flex-wrap:wrap">
          <el-col :md="24" v-for="(item, index) in model.items" :key="index">
            <el-form-item label="链接">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top: 1rem">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="
                  (res) => {
                    $set(item, 'image', res.url);
                  }
                "
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button
                size="small"
                type="danger"
                @click="model.items.splice(index, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategoryEdit",
  data() {
    return {
      model: {
        items: [],
      },
    };
  },
  props: {
    id: {
      type: String,
    },
  },
  methods: {
    // 保存新建分类
    async save() {
      let res;
      if (this.id) {
        const res = await this.$http.put(`rest/ads/${this.id}`, this.model);
      } else {
        const res = await this.$http.post("rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 获取需要编辑的分类数据
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 40rem;
  height: 20rem;
  line-height: 20rem;
  text-align: center;
}
.avatar {
  width: 40rem;
  height: 20rem;
  display: block;
}
</style>