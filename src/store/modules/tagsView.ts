import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";

export const useTagsViewStore = defineStore("tagsView", () => {
  /**
   * 页签路由管理
   */
  const visitedViews = ref<TagView[]>([]);
  const cachedViews = ref<string[]>([]);

  const route = useRoute();
  const router = useRouter();
  /**
   * 添加路由到视图列表中去
   */
  const addVisitedView = (view: TagView) => {
    if (visitedViews.value.some(v => v.path === view.path)) {
      return;
    }
    if (view.meta.affix) {
      visitedViews.value.unshift(view);
    } else {
      visitedViews.value.push(view);
    }
  };

  /**
   * 添加缓存路由到缓存视图中去
   */
  const addCachedView = (view: TagView) => {
    const viewName = view.name;
    if (cachedViews.value.includes(viewName)) {
      return;
    }
    if (view.meta.keepAlive) {
      cachedViews.value.push(viewName);
    }
  };

  /**
   * 从路由列表中删除指定视图
   */
  const delVisitedView = (view: TagView) => {
    return new Promise(resolve => {
      for (const [i, v] of visitedViews.value.entries()) {
        if (v.path === view.path) {
          visitedViews.value.splice(i, 1);
          break;
        }
      }
      resolve([...visitedViews.value]);
    });
  };

  /**
   * 从缓存路由中删除指定视图
   */
  const delCachedView = (view: TagView) => {
    const viewName = view.name;
    return new Promise(resolve => {
      const index = cachedViews.value.indexOf(viewName);
      index > -1 && cachedViews.value.splice(index, 1);
      resolve([...cachedViews.value]);
    });
  };

  /**
   * 关闭其它路由
   */
  const delOtherVisitedViews = (view: TagView) => {
    return new Promise(resolve => {
      visitedViews.value = visitedViews.value.filter(v => {
        return v?.meta.affix || v.path === view.path;
      });
      resolve([...visitedViews.value]);
    });
  };

  /**
   * 关闭其它缓存路由
   */
  const delOtherCachedViews = (view: TagView) => {
    const viewName = view.name as string;
    return new Promise(resolve => {
      const index = cachedViews.value.indexOf(viewName);
      if (index > -1) {
        cachedViews.value = cachedViews.value.slice(index, index + 1);
      } else {
        cachedViews.value = [];
      }
      resolve([...cachedViews.value]);
    });
  };

  /**
   * 更新当前组件
   */
  const updateVisitedView = (view: TagView) => {
    for (let v of visitedViews.value) {
      if (v.path === view.path) {
        v = Object.assign(v, view);
        break;
      }
    }
  };

  /**
   * 添加路由
   */
  const addView = (view: TagView) => {
    addVisitedView(view);
    addCachedView(view);
  };

  /**
   * 关闭当前
   */
  const delView = (view: TagView) => {
    return new Promise(resolve => {
      delVisitedView(view);
      delCachedView(view);
      resolve({
        visitedViews: [...visitedViews.value],
        cachedViews: [...cachedViews.value]
      });
    });
  };

  /**
   *  关闭其它
   */
  const delOtherViews = (view: TagView) => {
    return new Promise(resolve => {
      delOtherVisitedViews(view);
      delOtherCachedViews(view);
      resolve({
        visitedViews: [...visitedViews.value],
        cachedViews: [...cachedViews.value]
      });
    });
  };

  /**
   * 关闭左侧
   */
  const delLeftViews = (view: TagView) => {
    return new Promise(resolve => {
      const currIndex = visitedViews.value.findIndex(v => v.path === view.path);
      if (currIndex === -1) {
        return;
      }
      visitedViews.value = visitedViews.value.filter((item, index) => {
        if (index >= currIndex || item?.meta.affix) {
          return true;
        }

        const cacheIndex = cachedViews.value.indexOf(item.name);
        if (cacheIndex > -1) {
          cachedViews.value.splice(cacheIndex, 1);
        }
        return false;
      });
      resolve({
        visitedViews: [...visitedViews.value]
      });
    });
  };

  /**
   * 关闭右侧
   */
  const delRightViews = (view: TagView) => {
    return new Promise(resolve => {
      const currIndex = visitedViews.value.findIndex(v => v.path === view.path);
      if (currIndex === -1) {
        return;
      }
      visitedViews.value = visitedViews.value.filter((item, index) => {
        if (index <= currIndex || item?.meta.affix) {
          return true;
        }
      });
      resolve({
        visitedViews: [...visitedViews.value]
      });
    });
  };

  /**
   * 关闭所有
   */
  const delAllViews = () => {
    return new Promise(resolve => {
      const affixTags = visitedViews.value.filter(tag => tag?.meta.affix);
      visitedViews.value = affixTags;
      cachedViews.value = [];
      resolve({
        visitedViews: [...visitedViews.value],
        cachedViews: [...cachedViews.value]
      });
    });
  };

  const isActive = (tag: TagView) => {
    return tag.path === route.path;
  };

  const toLastView = (visitedViews: TagView[], view?: TagView) => {
    const latestView = visitedViews.slice(-1)[0];
    if (latestView && latestView.fullPath) {
      router.push(latestView.fullPath);
    } else {
      if (view?.name === "dashboard") {
        router.replace("/redirect" + view.fullPath);
      } else {
        router.push("/");
      }
    }
  };

  return {
    visitedViews,
    cachedViews,
    addView,
    delView,
    delOtherViews,
    delLeftViews,
    delRightViews,
    delAllViews,
    updateVisitedView,
    isActive,
    toLastView
  };
});
