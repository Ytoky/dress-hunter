import {API} from "../api.ts";
import {clothResponse} from "./type.ts";

export const clothApi = {
    async getClothes(params?:string):Promise<clothResponse[]> {
        const {data} = await API.get(`cloth${params}`)
        return data
    },
    async getClothById(id:number):Promise<clothResponse> {
        const {data} = await API.get(`cloth/${id}`)
        return data
    },
    async patchClothById(id:number, body:clothResponse){
        return await API.patch(`cloth/${id}`, body)
    }
}