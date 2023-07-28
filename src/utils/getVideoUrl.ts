//动态获取本地视频
export const getVideoUrl = (video: any) => {
    return new URL(`../assets/videos/${video}`, import.meta.url).href
}
