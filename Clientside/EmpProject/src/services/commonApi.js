import axios from "axios";

const commonApi=(reqMethod,reqData,reqUrl,reqHeader)=>{
    const config={
        data:reqData,
        method:reqMethod,
        url:reqUrl,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}

    }
    return axios(config)
}
export default commonApi