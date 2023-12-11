import { instance } from "./base.api";

const endpoint = "fac_rest/";

export const facultades = {
    getAll: function(){
        return instance.get(endpoint);
    }
}