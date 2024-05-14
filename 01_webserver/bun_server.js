import {serve} from "bun"

serve({
    fetch(request){

        const url = new URL(request.url)
        if(url.pathname = "/"){
            return new Response("hello bun",{status:200})
        }else if(url.pathname = "/login"){
            return new Response("this is bun login",{status:200})
        }else{
            return new Response("Bad gatewAY",{status:400})
        }

    },
    port:4000,
    hostname:"127.0.0.1"
})