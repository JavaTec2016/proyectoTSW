type paramsObject = {
    [k in string]: string | number | null
}

class API {

    //direccion

    static ROOT = 'http://localhost:8001'
    static API_URL = '/colectas/api/'
    static API_VERSION = 'v1/'
    
    //endpoints
    
    static CATEGORIAS = 'categorias/'
    static CORPORACONES = 'corporaciones/'
    static endpoints = new Set<string>()
    
    static init(){
        this.endpoints
        .add(this.CATEGORIAS)
        .add(this.CORPORACONES)
    }
    /**
     * 
     * @param params objeto con parametros de url
     * @returns string convertido
     */
    static __getParams(params:paramsObject){
        const pairs:string[] = [];
        for(const param in params){
            pairs.push(param+'='+params[param])
        }
        return pairs.join('&');
    }
    static concat(endpoint:string){
        return this.ROOT+this.API_URL+this.API_VERSION+endpoint;
    }
    private static getUrl(url:string, params:{} | null = null){
        let urlFinal = url;
        if(this.endpoints.has(urlFinal)){
            urlFinal = this.concat(urlFinal);
        }
        if(params != null){
            urlFinal += '?'+this.__getParams(params)
        }
        return urlFinal;
    }
    static async post(url:string, body:{[x:string]:any}){
        let urlFinal = this.getUrl(url);
        let res = await fetch(urlFinal, {method:'POST', body:JSON.stringify(body), headers:{'Content-Type':'application/json'}})
        if(res.ok) return {message:'todo bien'}
        return {error: await res.text()}
    }
    /**
     * GET a una url
     * @param url url
     * @param params parametros
     */
    static async get(url:string, params:{} | null):Promise<{[x:string]:any}[]>{
        let urlFinal = this.getUrl(url, params);
        let res = await fetch(urlFinal, { method:'GET'})
        return await res.json();
    }
    static async delete(url:string, idValue:any){
        let urlFinal = this.getUrl(url)+idValue+'/';
        let res = await fetch(urlFinal, {method:'DELETE'})
        if(!res.ok){
            return {'error':await res.text()}
        }
        return {'message': await res.text()}
    }
    static async getDetail(url:string, idValue:any){
        let urlFinal = this.getUrl(url)+idValue+'/';
        let res = await fetch(urlFinal, {method:'GET'})
        if(!res.ok) return {error: await res.text()}
        return await res.json();
    }
    static async update(url:string, idValue:any, body:{}){
        let urlFinal = this.getUrl(url)+idValue+'/';
        let res = await fetch(urlFinal, {method:'PUT', body:JSON.stringify(body), headers:{'Content-Type':'application/json'}})
        if(!res.ok) return {'error': await res.text()}
        return {message: await res.text()};
    }
}
API.init()

export default API;