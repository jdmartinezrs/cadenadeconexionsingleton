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

    // async getAllBlurayMoviesWithMoreThan200(){
    //     let res = await this.collection.find({"format":{$elemMatch:{name:"Bluray"}}},{projection:{format:{$elemMatch:{name:"Bluray"}}}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }

    async getAllBlurayMoviesWithMoreThan200(){
        let res = await this.collection.find({"format":{$elemMatch:{name:"Bluray"}}},{projection:{format:{$elemMatch:{name:"Bluray"}}}}).toArray();
        await this.conexion.close()
        return res;
    }


    async getAllDvdFormatMoviesLessThan10(){
        let res = await this.collection.find({"format.value":{$lt:10},"format.name":{$eq:"dvd"}},{projection:{_id:0,"format.value":1,"format.name":1}}).toArray();
        await this.conexion.close()
        return res;
    }

    // async getAllBlurayMoviesWithMoreThan200(){
    //     let res = await this.collection.find({"format.copies": {$gte: 200}, "format.name": "Bluray"}, {_id:0, "format.copies": 1, "format.name": 1}).toArray();
    //     await this.conexion.close()
    //     return res;

    // }


    async getAllMoviesWereCharactherNickNameIsCobb(){
        let res = await this.collection.find({"character.apodo":"Cobb"},{projection:{_id:0,"character.apodo":1}}).toArray();
        await this.conexion.close()
        return res;
    }


    
    async getAllMoviesWereActorIdsAre2And3(){
        let res = await this.collection.find({"character.id_actor":{$in:[2,3]}},{projection:{_id:0,"character.id_actor":1,name:1}}).toArray();
        await this.conexion.close()
        return res;
    }

    async getAllMoviesInBlurayFormat(){
        let res = await this.collection.find({"format.name":"Bluray"},{projection:{_id:0,"format.name":1,name:1}}).toArray();
        await this.conexion.close()
        return res;
    }


    async getAllCienceFictionMovies(){
        let res = await this.collection.find({genre:"Ciencia Ficción"},{projection:{_id:0,genre:1,name:1}}).toArray();
        await this.conexion.close()
        return res;
    }


    async getAllMoviesWithAnActorRolMiguel(){
        let res = await this.collection.find({"character.rol":'principal'},{"character.rol":'Migel'},{projection:{_id:0,"character.apodo":1,"character.apodo":1}}).toArray();
        await this.conexion.close()
        return res;
    }

    async getMovieWithatlessAFormatWithMoreThan100Copies(){
        let res = await this.collection.find({"format.copies":{$gte:100}},{projection:{_id:0,"format.copies":1,name:1}}).toArray();
        await this.conexion.close()
        return res;
    }


    async getMovieWithatlessAFormatWithMoreThan100Copies(){
        let res = await this.collection.find({"character.id_actor":1},{projection:{_id:0,"character.id_actor":1,name:1}}).toArray();
        await this.conexion.close()
        return res;
    }

    async getAllMoviesWithPrincipalActorNickNamedCobb(){
        let res = await this.collection.find({"character.apodo":'Cobb'},{projection:{_id:0,"character.apodo":1,name:1}}).toArray();
        return res;
    }

    async getAllMoviesInBlurayFormatWithMoreThan200Copies(){
        let res = await this.collection.find({"format.copies":{$gte:200},"format.name":"Bluray"},{_id:0,"format.copies":1,"format.name":1,name:1}).toArray();
        return res;
    }


    async getAllMoviesInDvdFormatWithLessThan10(){
        let res = await this.collection.find({"format.copies":{$gte:200},"format.name":"Bluray"},{_id:0,"format.copies":1,"format.name":1,name:1}).toArray();
        return res;
    }



    async getAllMoviesWithSecundaryActorNickNamedArthur(){
        let res = await this.collection.find(
            {"character.rol": 'secundario', "character.apodo": 'Arthur'},
            {_id: 0, "character.rol": 1, "character.apodo": 1}
          ).toArray();
        return res;
    }




    async getAllMoviesWithMainRolActorNickNamedMiguel(){
        let res = await this.collection.find(
            {"character.rol": 'principal', "character.apodo": 'Miguel'},
            {_id: 0, "character.rol": 1, "character.apodo": 1}
          ).toArray();
        return res;
    }























}
