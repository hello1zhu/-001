import ZHURequest from "../request/index";

export function getHotSuggests() {
  return ZHURequest.get({
    url: '/home/hotSuggests'
  })
}

// export function getCategories() {
//   return ZHURequest.get({
//     url: '/home/categories'
//   })
// }

// export function getHouseList(page) {
//   return ZHURequest.get({
//     url: '/home/houselist',
//     params: {
//       page
//     }
//   })
// }