import {API} from "../api.ts";
import {ClothResponse} from "./type.ts";

export const clothApi = {
    async getClothes(params?:string):Promise<ClothResponse[]> {
        const {data} = await API.get(`cloth${params}`)
        return data
    },
    async getClothById(id:number):Promise<ClothResponse> {
        const {data} = await API.get(`cloth/${id}`)
        return data
    },
    async patchClothById(id:number, body:ClothResponse){
        return await API.patch(`cloth/${id}`, body)
    }
}