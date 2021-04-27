<template>
  <div class="card-table">
    <el-row :gutter="10">
      <el-col
        class="service-col"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        v-for="item in allServices"
        :key="item.id"
      >
        <el-card shadow="hover">
          <img :src="item.imgUrl" class="card-picture" />
          <div class="card-main">
            <span class="card-header">{{ item.title }}</span>
            <el-row type="flex" align="middle" justify="space-between">
              <el-col :span="16" class="sub-title">{{ item.version }}</el-col>
              <el-col :span="6">
                <el-button-group class="service-options">
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(item)"
                  />
                  <el-button type="text" icon="el-icon-share" />
                  <el-popconfirm
                    title="确定删除该服务吗？"
                    @confirm="confirmDelete(item)"
                  >
                    <template #reference>
                      <el-button type="text" icon="el-icon-delete" />
                    </template>
                  </el-popconfirm>
                </el-button-group>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <Modal ref="serviceModal" @handle-edit-success="getDataByPage" />
</template>

<script>
import Modal from './components/modal';
import { getAllServices, deleteService } from '../service';
export default {
  name: 'CardTable',
  components: {
    Modal,
  },
  data() {
    return {
      allServices: [],
      pagination: {
        current: 1,
        total: 0,
        pageSize: 10,
      },
    };
  },
  mounted() {
    this.getDataByPage();
  },
  methods: {
    handleEdit(item) {
      const target = this.$refs['serviceModal'];
      target.formData = { ...item };
      target.visible = true;
    },
    async confirmDelete(item) {
      let res;
      try {
        res = await deleteService({
          serviceId: item.id,
        });
      } catch (e) {
        console.log(e);
      }
      if (res) {
        this.getDataByPage();
      }
    },
    async getDataByPage() {
      let res;
      try {
        res = await getAllServices({
          current: this.pagination.current,
          pageSize: this.pagination.pageSize,
        });
      } catch (e) {
        console.error(e);
        this.$message.error('获取服务错误！');
      }
      if (res) {
        this.allServices = res.data.results;
      }
    },
  },
};
</script>

<style scoped>
.card-picture {
  width: 100%;
}
.service-col {
  margin-bottom: 10px;
}
.card-main {
  margin-top: 14px;
}
.card-footer {
  display: flex;
}
.sub-title {
  color: #999;
  font-size: 14px;
}
.service-options button:not(:last-child)::after {
  content: '';
  margin: 0 10px;
}
</style>
