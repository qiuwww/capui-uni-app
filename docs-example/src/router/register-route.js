function getRouteItem(page) {
  let { path } = page;

  console.log("####", __dirname, path);

  if (path) {
    path = path.replace("/", "");
    // u-button
    const component = () =>
      page.md ? import(`../layout/intro.md`) : import(`../layout/intro.md`);

    if (!component) {
      return;
    }

    return {
      name: "/" + path,
      component,
      path: `/${path}`,
      meta: {
        path,
        name: page.title,
      },
    };
  }
}

// 转换，指向具体的组件
const registerRoute = (navs = []) => {
  const route = [
    {
      path: "*",
      redirect: () => `/intro`,
    },
  ];

  navs.forEach((nav) => {
    if (nav.children) {
      // 这里默认只展示2级
      nav.children.forEach((page) => {
        route.push(getRouteItem(page));
      });
    } else {
      route.push(getRouteItem(nav));
    }
  });

  return route;
};

export default registerRoute;
