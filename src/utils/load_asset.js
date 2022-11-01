export const getAssetUrl = (img) => {
    //参数一：相对路径
    //参数二：当前模块所在路径
    return new URL(`../assets/img/${img}`,import.meta.url).href
}