<template>
  <div class="test-upload">
    <s-block title="基本用法">
      <s-input
        type="upload"
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <s-input type="button" size="small" hue="primary">点击上传</s-input>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </s-input>
    </s-block>
    <s-block title="用户头像上传">
      <s-input
        type="upload"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </s-input>
    </s-block>
    <s-block title="照片墙">
      <s-input
        type="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </s-input>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </s-block>
    <!-- 文件缩略图暂不支持 -->
    <s-block title="文件缩略图">
      <s-input
        type="upload"
        action="#"
        list-type="picture-card"
        :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled2"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled2"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
      </s-input>
      <el-dialog :visible.sync="dialogVisible2">
        <img width="100%" :src="dialogImageUrl2" alt="">
      </el-dialog>
    </s-block>
    <s-block title="图片列表缩略图">
      <s-input
        type="upload"
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList2"
        list-type="picture">
        <s-input type="button" size="small" hue="primary">点击上传</s-input>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </s-input>
    </s-block>
    <s-block title="上传文件列表控制">
      <s-input
        type="upload"
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange"
        :file-list="fileList3">
        <s-input type="button" size="small" hue="primary">点击上传</s-input>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </s-input>
    </s-block>
    <s-block title="拖拽上传">
      <s-input
        type="upload"
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </s-input>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Message, MessageBox, Dialog as ElDialog } from 'element-ui';

// 点击上传
const fileList = ref([{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}])

function handlePreview(file) {
  console.log(file);
}

function handleRemove(file, fileList) {
  console.log(file, fileList);
}

function handleExceed(files, fileList) {
  Message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
}

function beforeRemove(file, fileList) {
  return MessageBox.confirm(`确定移除 ${ file.name }？`);
}

// 用户头像上传
const imageUrl = ref('')

function handleAvatarSuccess(res, file) {
  imageUrl.value = URL.createObjectURL(file.raw);
}

function beforeAvatarUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isJPG) {
    Message.error('上传头像图片只能是 JPG 格式!');
  }
  if (!isLt2M) {
    Message.error('上传头像图片大小不能超过 2MB!');
  }
  return isJPG && isLt2M;
}

// 照片墙
const dialogImageUrl = ref('')
const dialogVisible = ref(false)

function handlePictureCardPreview() {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
}

// 文件缩略图
const dialogImageUrl2 = ref('')
const dialogVisible2 = ref(false)
const disabled2 = ref(false)

// 图片列表缩略图
const fileList2 = ref([{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}])

// xxx
const fileList3 = ref([{
  name: 'food.jpeg',
  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
}, {
  name: 'food2.jpeg',
  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
}])

function handleChange() {

}

</script>

<style lang="scss">
.test-upload {
  .avatar-uploader .s-input {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .s-input:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>