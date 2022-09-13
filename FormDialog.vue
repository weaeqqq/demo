<!--
  <FormDialog
    :callFunction="callFunction"
    @ok="handleEditAccountSuc"
    ref="FormDialog"
  />
  <el-button type="primary" @click="handleEditAccount({...}}})">编辑账号</el-button>
  <el-button type="primary" @click="handleAddAccount">添加账号</el-button>

  methods: {
    getFormData(type, data) {
      this.currentRow = data;
      const isEdit = type === "edit";

      const optimizeUsers = this.optimizeUsers.filter((item) => item.is_lock === 0);
      const userList = optimizeUsers;

      if (data?.owner_user_id && !optimizeUsers.find((user) => user.user_id == data.owner_user_id)) {
        const option = { user_name_alias: data.user_name, user_id: data.owner_user_id };
        userList.unshift(option);
      }
      const userDisabled = !this.systemPermissions.user_permission;

      const noteValidator = (rule, value, callback) => {
        if (!value) {
          return callback();
        }
        if (this.$utils.getBytes(value) > 40) {
          return callback("不能超过40个字符,一个汉字算2个字符");
        } else {
          return callback();
        }
      };

      const CURRENCY_LSIT = Object.keys(CURRENCY_TYPE).map((key) => {
        const label = key === "CNY" ? "人民币" : CURRENCY_TYPE[key].name;
        return {
          label: `${label}(${key})`,
          value: key,
        };
      });

      const columns = [
        { label: "账户名称", prop: "advertiser_name", itemType: "input", attrs: { disabled: isEdit } },
        { label: "账户邮箱", prop: "email", itemType: "input", attrs: { disabled: isEdit } },
        {
          label: "账户货币",
          prop: "currency_code",
          itemType: "select",
          options: CURRENCY_LSIT,
          attrs: {
            clearable: true,
            filterable: true,
            disabled: isEdit,
          },
        },
        { label: "Organization", prop: "advertiser_nick", itemType: "input", attrs: { disabled: isEdit } },
        {
          label: "Org core ID",
          prop: "advertiser_id",
          itemType: "input",
          attrs: {
            disabled: isEdit,
            placeholder: "请输入Org core ID, 只能输入数字",
          },
          events: {
            input(val, target){
              val = val.replace(/[^\d]/g, '');
              target.model.advertiser_id = val;
            },
          }
        },
        { label: "Organization ID", prop: "access_token", itemType: "input", attrs: { disabled: isEdit } },
        { label: "API Key", prop: "refresh_token", itemType: "input" },
        { label: "Secret Key", prop: "develop_app_secret", itemType: "input" },
        { label: "Key ID", prop: "develop_app_key", itemType: "input" },
        {
          label: "所属人员",
          prop: "owner_user_id",
          itemType: "select",
          options: userList,
          valueString: "user_id",
          labelString: "user_name_alias",
          attrs: {
            clearable: true,
            filterable: true,
            disabled: userDisabled,
          },
        },
        {
          label: "项目",
          prop: "media_project_id",
          itemType: "select",
          options: this.projectList,
          valueString: "media_project_id",
          labelString: "media_project_name",
          attrs: {
            filterable: true,
          },
        },
        {
          label: "备注信息",
          prop: "note",
          itemType: "input",
          attrs: {
            type: "textarea",
            rows: 3,
          },
        },
        {
          label: "投放状态",
          prop: "advertiser_status",
          itemType: "radio",
          popoverContent: "账户停投后不会对计划状态和数据报表产生任何影响，在主面板和新建计划时将不再加载该账户的相关信息。",
          options: [
            { value: "1", label: "启用" },
            { value: "0", label: "停投" },
          ],
        },
      ];

      const model = {
        advertiser_name: "",
        currency_code: "USD",
        email: "",
        advertiser_nick: "",
        advertiser_id: "",
        access_token: "",
        refresh_token: "",
        develop_app_secret: "",
        develop_app_key: "",
        owner_user_id: this.account.user_id,
        media_project_id: "",
        note: "",
        advertiser_status: "1",
      };

      if (isEdit) {
        Object.keys(model).forEach((key) => {
          if (_.has(data, key)) {
            model[key] = data[key];
          }
        });
      }

      const rules = {
        advertiser_name: [{ required: true, message: "请输入账户名称", trigger: "blur" }],
        email: [
          { required: true, message: "请输入账户邮箱", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ],
        currency_code: [{ required: true, message: "请选择货币", trigger: "change" }],
        advertiser_id: [{ required: true, message: "请输入Org core ID", trigger: "blur" }],
        access_token: [{ required: true, message: "请输入Organization ID", trigger: "blur" }],
        refresh_token: [{ required: true, message: "请输入API Key", trigger: "blur" }],
        develop_app_secret: [{ required: true, message: "请输入Secret Key", trigger: "blur" }],
        develop_app_key: [{ required: true, message: "请输入Key ID", trigger: "blur" }],
        owner_user_id: [{ required: true, message: "请选择所属人员", trigger: "change" }],
        note: [{ trigger: "blur", validator: noteValidator }],
      };

      const result = {
        title: isEdit ? "编辑账户" : "新增账户",
        columns,
        model,
        rules,
        isEdit,
      };

      return _.cloneDeep(result);
    },
    // 新增账户
    handleAddAccount() {
      const data = this.getFormData("add", {});
      this.$refs.FormDialog.open(data);
    },
    // 编辑账户
    handleEditAccount(row) {
      const data = this.getFormData("edit", row);
      this.$refs.FormDialog.open(data);
    },
    // 新增编辑
    callFunction(params) {
      Object.assign(params, {
        media_type: "unity",
        advertiser_ids: [''],
      });

      const { media_account_id } = this.currentRow;
      if (media_account_id) {
        params.media_account_id = media_account_id;
      }

      if (media_account_id) {
        return mediaApi
          .update(params)
          .then((res) => {
            this.$message.success("编辑成功");
            return true;
          })
          .catch(() => false);
      }

      return this.$axios
        .post("/Delo/Account/saveAccount", params)
        .then((res) => {
          this.$message.success("新增账户成功");
          return true;
        })
        .catch(() => false);
    },

    callFunction () {
      return this.$api.editAccount(this.form)
    }
  }
-->
<template>
  <el-dialog
    :title="title"
    :visible="visible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    :before-close="close"
    custom-class="cl-dialog--middle"
    width="600px"
  >
    <el-form
      ref="elFormRef"
      :model="model"
      :rules="rules"
      @submit.native.prevent
      size="small"
      :label-width="labelWidth"
      class="mg-form"
    >
      <el-form-item
        v-for="(col, index) in columns"
        :key="index"
        :label="col.label"
        :prop="col.prop"
      >
        <template v-if="col.itemType === 'input'">
          <el-input
            v-model.trim="model[col.prop]"
            v-bind="col.attrs"
            v-on="getEvents(col.events)"
            :placeholder="(col.attrs || {}).placeholder || '请输入'"
          ></el-input>
        </template>

        <template v-else-if="col.itemType === 'select'">
          <el-select
            v-model="model[col.prop]"
            v-bind="col.attrs"
            v-on="getEvents(col.events)"
            :placeholder="(col.attrs || {}).placeholder || '请选择'"
          >
            <el-option
              v-for="item in col.options"
              :key="item[col.valueString] || item.value"
              :label="item[col.labelString] || item.label"
              :value="item[col.valueString] || item.value"
            ></el-option>
          </el-select>
        </template>

        <template v-else-if="col.itemType === 'radio'">
          <el-radio-group v-model="model[col.prop]" v-bind="col.attrs">
            <el-radio-button
              v-for="item in col.options"
              :key="item[col.valueString] || item.value"
              :label="item[col.valueString] || item.value"
              >{{ item[col.labelString] || item.label }}</el-radio-button
            >
          </el-radio-group>

          <el-popover
            v-if="col.popoverContent"
            :content="col.popoverContent"
            popper-class="mg-popover"
            placement="right"
            width="296"
            trigger="hover"
          >
            <i slot="reference" class="mg-icon-question2 ml8"></i>
          </el-popover>
        </template>
      </el-form-item>
    </el-form>

    <template v-slot:footer>
      <div>
        <el-button class="footer-btn" @click="close">取消</el-button>
        <el-button
          class="footer-btn"
          type="primary"
          :loading="submiting"
          @click="handleSave"
          >确定</el-button
        >
      </div>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "FormDialog",
  props: {
    callFunction: {
      type: Function,
      default: () => true,
    },
  },
  data() {
    return {
      visible: false,
      // form rules
      rules: {
        // budget: [
        //   { message: "请输入预算", required: true }
        // ]
      },
      // 数据
      model: {
        // budget: "",
      },
      // form配置
      columns: [
        // { label: "预算", prop: "budget", itemType: "input", attrs: { placeholder: "请输入预算" , disabled: false } },
      ],
      // 默认拓展配置
      title: "",
      submiting: false,
      labelWidth: "",
    };
  },
  methods: {
    getEvents(events) {
      const result = {};
      if (!_.isEmpty(events)) {
        Object.keys(events).forEach((key) => {
          result[key] = (e) => {
            events[key](e, this);
          };
        });
      }
      return result;
    },
    open(option) {
      const { title, model, columns, rules, labelWidth = "120px" } = _.cloneDeep(option);

      Object.assign(this, {
        title,
        model,
        columns,
        rules,
        labelWidth,
        submiting: false,
        visible: true,
      });

      this.$nextTick(() => {
        this.$refs.elFormRef.clearValidate();
      });
    },
    close() {
      this.visible = false;
    },
    async handleSave() {
      try {
        this.submiting = true;
        await this.$refs.elFormRef.validate();
        const result = await this.callFunction(this.model);
        this.submiting = false;
        if (result) {
          this.$emit("ok", this.model);
          this.close();
        }
      } catch (error) {
        if (error === false) {
          this.submiting = false;
        }
        error !== false && console.error("error", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;
}

.footer-btn {
  letter-spacing: 2px;
}
</style>
