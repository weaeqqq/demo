<!--
  <el-form-item label="三张小图">
    <MultipleImgUpload 
      v-model="form.three_image"
      key="three_image" 
      :limit="3"
      :maxSize="100" 
      :maxWidth="306"
      :maxHeight="306"
      :mediaAccountIds="show_media_account_ids"
      :apiFunc="apiFunc"
      @changeLoading="changeLoading"
      tip="图片大小为306像素x306像素，支持bmp, png, jpeg, jpg格式，每张不超过100KB"/>
  </el-form-item>

  methods: {
    changeLoading (val) {
      this.loading = val
    },
    apiFunc (data) {
      return this.$api.uploadImage(data)
    }
  }
-->
<!-- MultipleImgUpload -->
<template>
  <div>
    <div class="upload-box">
      <div class="image-item" v-for="(item, index) in currentAccount" :key="index">
        <img :src="item.image_url" alt=""/>
        <span class="actions">
          <span class="el-delete" @click="handleRemove(item)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
      <div style="display: inline-block;">
        <el-upload
          ref="uploadRef"
          list-type="picture-card"
          action
          multiple
          :accept="accept" 
          :show-file-list="false"
          v-if="currentAccount.length < limit"
          :before-upload="handleBeforeUpload"
          :on-success="handleSuccess"
          :on-error="handleError"
          :file-list="uploadFiles"
          :http-request="httpRequest"
          :limit="limit - currentAccount.length"
          :on-exceed="handleOnExceed">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
    </div>
    <div class="tips">{{tip}}</div>
  </div>
</template>

<script>
export default {
  name: "MultipleImgUpload",
  model: {
    prop: "value",
    event: "input",
  },
   props: {
    value: {
      type: Array,
      default: () => [],
    },
    accept: {
      type: String,
      default: ".bmp, .png, .jpeg, .jpg",
    },
    limit: {
      type: Number,
      default: 3,
    },
    tip: {
      type: String,
      default: "图片大小为750像素x750像素，支持bmp, png, jpeg, jpg格式，每张不超过300KB",
    },
    maxSize: {
      type: Number,
      default: 0, // 0表示不限制 单位KB
    },
    maxWidth: {
      type: Number,
      default: 0, // 0表示不限制
    },
    maxHeight: {
      type: Number,
      default: 0, // 0表示不限制
    },
    mediaAccountIds: {
      type: Array,
      default: () => {
        return []
      },
    },
    apiFunc: {
      type: Function,
      default() {
        return () => {}
      },
    },
  },
  data() {
    return {
      sonFileList: [],
      uploadFiles: [],
    }
  },
  computed: {
    currentAccount() {
      const id = this.mediaAccountIds[0];
      return this.sonFileList.filter(item => item.media_account_id == id);
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.sonFileList = val;
      },
    },
  },
  methods: {
    handleOnExceed() {
      this.$message.warning(`最多上传${this.limit}张图片`);
    },
    getImageSize(file) {
      return new Promise((resolve, reject) => {
        const _URL = window.URL || window.webkitURL;
        let img = new Image()
        img.src = _URL.createObjectURL(file);
        img.onload = () => {
          resolve({
            width: img.width,
            height: img.height,
          })
        }
        img.onerror = () => {
          reject("图片加载失败")
        }
      })
    },
    async handleBeforeUpload(file) {
      try {
        this.uploadFiles = [];
        const {maxSize, maxWidth, maxHeight, accept} = this;
        const size = file.size / 1024;
        
        const imageType = file.type.split('/')[1];
        if (!accept.includes(imageType)) {
          this.$message.warning(`仅支持${accept}格式`);
          return Promise.reject();
        }

        if (maxSize > 0 && size > maxSize) {
          this.$message.warning(`文件大小不超过${maxSize}KB`);
          return Promise.reject();
        }

        if (maxWidth && maxHeight) {
          const {width, height} = await this.getImageSize(file);
          if (width != maxWidth || height != maxHeight) {
            this.$message.warning(`图片尺寸：${maxWidth}x${maxHeight}像素`);
            return Promise.reject();
          }
        }

        return file;
      } catch (error) {
        console.error(error);
        return Promise.reject();
      }
    },
    handleSuccess(res, UUID) {
      if (Array.isArray(res)) {
        res.forEach(item => {
          item.UUID = UUID;
          this.sonFileList.push(item);
          this.$emit('input', this.sonFileList);
        })
      }
      this.$refs.uploadRef.clearFiles();
    },
    handleError(err) {
      console.error("上传失败", err);
    },
    httpRequest(item) {
      const UUID = this.$utils.generateUUID();
      const formData = new FormData()
      formData.append("file", item.file);
      formData.append("material_type", "image");

      this.mediaAccountIds.map((key) => {
        formData.append("media_account_ids[]", key);
      });

      this.$emit("changeLoading", true);

      const promise = this.apiFunc(formData)
        .then(res => this.handleSuccess(res, UUID))
        .catch(this.handleError)
        .finally(() => {
          this.$emit("changeLoading", false);
        });

      promise.abort = () => {};

      return promise;
    },
    handleRemove(data) {
      this.sonFileList = this.sonFileList.filter(item => item.UUID !== data.UUID);
      this.$emit('input', this.sonFileList);
    },
  },
};
</script>
<style scoped lang='scss'>
.tips {
  font-size: 12px;
  color: #808695;
}

.upload-box {
  display: flex;
  flex-wrap: wrap;
}

$width: 100px;
$height: 100px;

::v-deep {
  .el-upload--picture-card {
    width: $width;
    height: $height;
    line-height: $height;
  }
}

.image-item {
  position: relative;
  width: $width;
  height: $height;
  margin-right: 10px;
  border: 1px solid #c0ccda;
  border-radius: 6px;

  .actions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 20px;
    line-height: $height;
    color: #fff;
    text-align: center;
    cursor: default;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }

    span {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
}
</style>
