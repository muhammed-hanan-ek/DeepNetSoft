import CommonApi from "./commonApi"
import serverUrl from "./serverUrl"


export const getAllFoodsApi=async()=>{
    return await CommonApi("GET",`${serverUrl}/all-foods`,'')
}

export const getAllDrinksApi=async()=>{
    return await CommonApi("GET",`${serverUrl}/all-drinks`,'')
}

export const getAllBrunchesApi=async()=>{
    return await CommonApi("GET",`${serverUrl}/all-brunches`,'')
}