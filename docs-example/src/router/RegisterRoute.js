export default class RegisterRoute {
  constructor(routeConfigList) {
    const routes = this.registerRoute(routeConfigList);
    return routes;
  }
  routes = [
    {
      path: '/',
      redirect: () => `/intro`,
    },
  ];
  setRouteItem(item) {
    let { path, children, title, views = '' } = item;
    if (children) {
      children.forEach((page) => {
        this.setRouteItem(page);
      });
      return;
    }

    if (children) {
      registerRoute(children);
      return;
    }

    if (path) {
      path = path.replace('/', '');
      const component = () =>
        views
          ? import(`../../../uview-ui/docs/${views}/${path}.md`)
          : import(`../../../uview-ui/components/${path}/README.md`);

      if (!component) {
        return;
      }

      this.routes.push({
        name: '/' + path,
        component,
        path: `/${path}`,
        md: true,
        meta: {
          ...item,
          path,
          name: title,
        },
      });
    }
  }

  // 转换，指向具体的组件
  registerRoute = (list = []) => {
    // 需要处理三级的路由，需要拼接二级路由，最后得到的都是绝对地址
    list.forEach((item) => {
      this.setRouteItem(item);
    });
    return this.routes;
  };
}
