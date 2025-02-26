// import type { BlockerFunction, RouteObject, RouterState } from 'react-router'
// import { createBrowserRouter } from 'react-router'
// import { parseQuery } from './query'

// type DOMRouterOpts = Parameters<typeof createBrowserRouter>[1]
// type Location = RouterState['location']
// type AgnosticDataRouteMatch = RouterState['matches']

// function createRouter(routes: RouteObject[], opt: DOMRouterOpts) {
//   const reactRouter = createBrowserRouter(routes, opt)

//   // 清理侦听器并中止任何正在进行的加载
//   reactRouter.dispose()

//   let currentRoute = transformLocationToRoute(reactRouter.state.location, reactRouter.state.matches);

//   // 添加路由拦截
//   reactRouter.getBlocker('beforeGuard', onBeforeRouteChange);

//   function onBeforeRouteChange ({ nextLocation }: Parameters<BlockerFunction>[0]) {
//     const to = resolve(nextLocation);

//     if (to.fullPath === currentRoute.fullPath) {
//       return true;
//     }

//     if (to.redirect) {
//       if (to.redirect.startsWith('/')) {
//         if (to.redirect === currentRoute.fullPath) {
//           return true;
//         }
//       } else {
//         const finalRoute = to.matched.at(-1);

//         const finalPath = getFullPath(finalRoute);

//         if (finalPath === currentRoute.fullPath) return true;
//       }
//     }

//     return beforeGuards.list()[0]?.(to, currentRoute, blockerOrJump);
//   }

//   /**
//    * Resolves a location into a normalized route.
//    *
//    * @param rawLocation - The raw location to resolve.
//    * @param currentLocation - The current location.
//    * @returns A normalized loaded route location.
//    */
//   function resolve(
//     rawLocation: Location | RouteLocationNamedRaw,
//     currentLocation?: RouteLocationNamedRaw
//   ): RouteLocationNormalizedLoaded {
//     const current = { ...(currentLocation as RouteLocationNamedRaw) };

//     let matcherLocation: Location | RouteLocationNamedRaw;

//     // path could be relative in object as well

//     if ('pathname' in rawLocation) {
//       matcherLocation = rawLocation;
//     } else {
//       // pass encoded values to the matcher, so it can produce encoded path and fullPath

//       matcherLocation = Object.assign(rawLocation, {
//         params: cleanParams(rawLocation.params),
//         query: cleanParams(rawLocation.query)
//       });
//     }

//     const matchedRoute = matcher.resolve(matcherLocation, current);

//     return {
//       ...matchedRoute,
//       redirectedFrom: currentRoute
//     };
//   }

//   return { reactRouter }
// }

// const transformLocationToRoute =(
//   location: Location,
//   match: AgnosticDataRouteMatch
// ) => {
//   const { hash, pathname, search, state } = location;
//   const lastMatch = match.at(-1);

//   return {
//     fullPath: pathname + search + hash,
//     hash,
//     matched: [],
//     meta: lastMatch?.route.handle,
//     name: lastMatch?.route.id,
//     params: Object.keys(lastMatch?.params || {}).filter(key => key !== '*'),
//     path: pathname,
//     query: parseQuery(search),
//     redirectedFrom: undefined,
//     state
//   };
// }

// export default createRouter
