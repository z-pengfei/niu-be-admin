<template>
  <div ref="container">
    <el-scrollbar ref="scrollContainer" height="34px" class="px-8px" @wheel.prevent="handleScroll">
      <div class="scrollbar-flex-content">
        <router-link
          v-for="item in visitedViews"
          :key="item.path"
          :to="{ path: item.path, query: item.query }"
          :class="['tags-item', { active: isActive(item) }]"
          @contextmenu.prevent="openTagMenu(item, $event)"
        >
          {{ item.meta.title }}
          <el-icon v-if="!item.meta.affix" :size="10" @click.prevent.stop="closeSelectedTag(item)"
            ><Close
          /></el-icon>
        </router-link>
      </div>
    </el-scrollbar>
  </div>

  <!-- tag标签操作菜单 -->
  <ul v-show="tagMenuVisible" class="tag-menu" :style="{ left: left + 'px', top: top + 'px' }">
    <li @click="refreshSelectedTag()">
      <SvgIcon name="refresh" />
      刷新
    </li>
    <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
      <SvgIcon name="close" />
      关闭
    </li>
    <li @click="closeOtherTags">
      <SvgIcon name="close_other" />
      关闭其它
    </li>
    <li v-if="!isFirstView()" @click="closeLeftTags">
      <SvgIcon name="close_left" />
      关闭左侧
    </li>
    <li v-if="!isLastView()" @click="closeRightTags">
      <SvgIcon name="close_right" />
      关闭右侧
    </li>
    <li @click="closeAllTags(selectedTag)">
      <SvgIcon name="close_all" />
      关闭所有
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useTagsViewStore } from "@/store/modules/tagsView";

const { proxy } = getCurrentInstance() as any;
const scrollWrapper = computed(() => proxy?.$refs.scrollContainer.$refs.wrapRef);

function handleScroll(e: WheelEvent) {
  const eventDelta = (e as any).wheelDelta || -e.deltaY * 40;
  scrollWrapper.value.scrollLeft += eventDelta / 4;
}

const tagsViewStore = useTagsViewStore();
const { visitedViews } = storeToRefs(tagsViewStore);

const left = ref(0);
const top = ref(0);
const tagMenuVisible = ref(false);
const container = ref<HTMLElement | null>(null);
const selectedTag = ref<TagView>({
  path: "",
  fullPath: "",
  name: "",
  query: {},
  meta: {
    title: "",
    affix: false,
    keepAlive: true
  }
});

const route = useRoute();
watch(
  route,
  () => {
    addTags();
    moveToCurrentTag();
  },
  {
    immediate: true //初始化立即执行
  }
);

onMounted(() => {
  watch(tagMenuVisible, value => {
    if (value) {
      document.body.addEventListener("click", closeTagMenu);
    } else {
      document.body.removeEventListener("click", closeTagMenu);
    }
  });
});

function addTags() {
  if (route.meta.title) {
    tagsViewStore.addView({
      name: route.name as string,
      path: route.path,
      fullPath: route.fullPath,
      query: route.query,
      meta: {
        title: route.meta.title as string,
        affix: !!route.meta?.affix,
        keepAlive: !!route.meta?.keepAlive
      }
    });
  }
}

function moveToCurrentTag() {
  // 使用 nextTick() 的目的是确保在更新 tagsView 组件之前，scrollPaneRef 对象已经滚动到了正确的位置。
  nextTick(() => {
    for (const tag of visitedViews.value) {
      if (tag.path === route.path && tag.fullPath !== route.fullPath) {
        tagsViewStore.updateVisitedView({
          name: route.name as string,
          path: route.path,
          fullPath: route.fullPath,
          query: route.query,
          meta: {
            title: route.meta.title as string,
            affix: !!route.meta?.affix,
            keepAlive: !!route.meta?.keepAlive
          }
        });
      }
    }
  });
}

const openTagMenu = (tag: TagView, e: MouseEvent) => {
  selectedTag.value = tag;
  const targetElement = e.target as HTMLElement;
  const menuMinWidth = 105;
  const pLeft = container.value?.getBoundingClientRect().left || 0;
  const pWidth = container.value?.getBoundingClientRect().width || 0;
  const { top: offsetTop, height: offsetHeight } = targetElement.getBoundingClientRect();

  left.value =
    e.clientX + menuMinWidth > pLeft + pWidth ? e.clientX - menuMinWidth : e.clientX + 20;
  top.value = offsetTop + offsetHeight - 6;
  tagMenuVisible.value = true;
};

const closeTagMenu = () => {
  tagMenuVisible.value = false;
};

const isActive = (tag: TagView) => {
  return route.name === tag.name;
};

const refreshSelectedTag = () => {
  tagsViewStore.delOtherViews(selectedTag.value).then(() => {
    tagsViewStore.toFirstView(selectedTag.value);
  });
};
const isAffix = (view: TagView) => {
  return view.meta.affix;
};
const closeSelectedTag = (view: TagView) => {
  tagsViewStore.delView(view).then((res: any) => {
    if (tagsViewStore.isActive(view)) {
      tagsViewStore.toLastView(res.visitedViews, view);
    }
  });
};
const closeOtherTags = () => {
  tagsViewStore.delOtherViews(selectedTag.value);
};
const isFirstView = () => {
  return selectedTag.value.fullPath === tagsViewStore.visitedViews[0].fullPath;
};
const closeLeftTags = () => {
  tagsViewStore.delLeftViews(selectedTag.value).then(() => {
    if (!isActive(selectedTag.value)) {
      tagsViewStore.toFirstView(selectedTag.value);
    }
  });
};
const isLastView = () => {
  return (
    selectedTag.value.fullPath ===
    tagsViewStore.visitedViews[tagsViewStore.visitedViews.length - 1]?.fullPath
  );
};
const closeRightTags = () => {
  tagsViewStore.delRightViews(selectedTag.value).then((res: any) => {
    tagsViewStore.toLastView(res.visitedViews, selectedTag.value);
  });
};
const closeAllTags = (view: TagView) => {
  tagsViewStore.delAllViews().then((res: any) => {
    tagsViewStore.toLastView(res.visitedViews, view);
  });
};
</script>

<style lang="scss" scoped>
.scrollbar-flex-content {
  display: flex;
}

.tag-active {
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
  padding: 0 20px;
  border-color: var(--el-color-primary-light-8);
  animation: paddingAni 0.3s forwards;

  .el-icon {
    animation: scaleActiveAni 0.3s forwards;
  }
}

.tags-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  animation: paddingActiveAni 0.3s forwards;
  text-align: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid var(--el-border-color-light);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    @extend .tag-active;
  }

  &.active {
    @extend .tag-active;
  }
}

.tags-item:not(:last-child) {
  border-right: none;
}

.el-icon {
  cursor: pointer;
  border-radius: 50%;
  margin-left: 10px;
  animation: scaleAni 0.3s forwards;

  &:hover {
    background-color: #b4bccc;
    color: #fff;
  }
}

@keyframes scaleActiveAni {
  from {
    transform: scale(0);
    width: 0;
  }
  to {
    transform: scale(1);
    width: 10px;
  }
}

@keyframes scaleAni {
  from {
    transform: scale(1);
    width: 10px;
  }
  to {
    transform: scale(0);
    width: 0;
  }
}

@keyframes paddingActiveAni {
  from {
    padding: 0 15px;
  }
  to {
    padding: 0 20px;
  }
}

@keyframes paddingAni {
  from {
    padding: 0 20px;
  }
  to {
    padding: 0 15px;
  }
}

.tag-menu {
  position: absolute;
  z-index: 99;
  font-size: 12px;
  background: var(--el-bg-color-overlay);
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-light);

  li {
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
      background: var(--el-fill-color-light);
    }
  }
}
</style>
