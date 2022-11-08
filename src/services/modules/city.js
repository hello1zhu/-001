import ZHURequest from "../request"
export function getCityAll() {
    return ZHURequest.get({
            url:"/city/all"
        })
} 