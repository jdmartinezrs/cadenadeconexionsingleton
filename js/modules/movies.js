import {connect} from "../../helpers/db/connect.js"
export class movies extends connect{
    static instance;
    constructor(){
        if(typeof movies.instance === "object"){
            return movies.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movies.instance = this;
        return this;
    }

    async getAllAccionMovies(){
        let res = await this.collection.find({genre:{$eq:"Accion"}},{projection:{_id:0,genre:1}}).toArray();
        await this.conexion.close()
        return res;
    }
  
}
