//动态获取本地图片
export const getImgUrl = (img: any) => {
    return new URL(`../assets/images/${img}`, import.meta.url).href
}
