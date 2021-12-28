<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1"><nuxt-link to="/">首页</nuxt-link></el-menu-item>
      <el-menu-item
        index="2"
        class="fenlei"
        @mouseenter="show1"
        @mouseleave="show2"
        ><nuxt-link to="/">商品分类</nuxt-link></el-menu-item
      >
      <el-menu-item index="3"
        ><nuxt-link to="/Product">成品系列</nuxt-link></el-menu-item
      >
      <el-menu-item index="4"
        ><nuxt-link to="/">专属定制</nuxt-link></el-menu-item
      >
      <el-menu-item index="5"><nuxt-link to="/find">发现</nuxt-link></el-menu-item>
      <el-sub-menu index="6">
        <template #title><nuxt-link to="/"></nuxt-link>我要发布</template>
        <el-menu-item index="2-1">发布产品需求</el-menu-item>
        <el-menu-item index="2-2">发布花型需求</el-menu-item>
      </el-sub-menu>

      <el-menu-item index="7">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearch"
          popper-class="my-autocomplete"
          placeholder="搜索窗帘"
          @select="handleSelect1"
        >
          <template #suffix>
            <el-icon class="el-input__icon" @click="handleIconClick">
              <Search />
            </el-icon>
          </template>

          <template #default="{ item }">
            <div class="value">{{ item.value }}</div>
            <span class="link">{{ item.link }}</span>
          </template>
        </el-autocomplete>
      </el-menu-item>
    </el-menu>
    <div v-if="show" @mouseenter="show3" @mouseleave="show4">
      <HeadHover></HeadHover>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Search } from "@element-plus/icons";
export default defineComponent({
  components: {
    Search,
  },
  setup() {
    const links = ref([]);
    const activeIndex2 = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const show = ref(false);
    let timer;
    const show1 = () => {
      show.value = true;
    };
    const show2 = () => {
      timer = setTimeout(() => {
        show.value = false;
      }, 1000);
    };
    const show3 = () => {
      clearTimeout(timer);
      show.value = true;
    };
    const show4 = () => {
      show.value = false;
    };
    const querySearch = (queryString: string, cb) => {
      const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;
      // call callback function to return suggestion objects
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      return [
        { value: "樱花粉", link: "" },
        { value: "土豪金粉", link: "" },
        { value: "黄粉", link: "" },
        { value: "绿", link: "" },
        { value: "红", link: "" },
        { value: "紫", link: "" },
        { value: "白", link: "" },
      ];
    };
    const handleSelect1 = (item) => {
      console.log(item);
    };

    const handleIconClick = (ev) => {
      console.log(ev);
    };

    onMounted(() => {
      links.value = loadAll();
    });

    return {
      activeIndex2,
      handleSelect,
      links,
      state: ref(""),
      querySearch,
      createFilter,
      loadAll,
      handleSelect1,
      handleIconClick,
      show,
      show1,
      show2,
      show3,
      show4,
    };
  },
});
</script>
<style scoped>
ul {
  text-align: center;
}
li.el-menu-item {
  padding: 0 40px;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>