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

    // async getAllAccionMovies(){
    //     let res = await this.collection.find({genre:{$eq:"Accion"}},{projection:{_id:0,genre:1}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }

    async getAllAccionMovies(){
        let res = await this.collection.aggregate([{$match:{genre:"Accion"}},
            {$project:{_id:0,genre:1}}]).toArray();
        await this.conexion.close()
        return res;
    }


    // async getAllBlurayMoviesWithMoreThan200(){
    //     let res = await this.collection.find({"format":{$elemMatch:{name:"Bluray"}}},{projection:{format:{$elemMatch:{name:"Bluray"}}}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }


        async getAllBlurayMoviesWithMoreThan200(){
        let res = await this.collection.aggregate([{$match:{"format.name":"Bluray","format.copies":{$gt: 200}}},
            {$unwind:"$format"},
            {$match:{"format.name":"Bluray","format.copies": { $gt: 200 }}},
            {$project:{_id:0, name: 1,formatName: "$format.name",copies:"$format.copies"}}]).toArray();
        await this.conexion.close()
         return res;
     }

   // async getAllDvdFormatMoviesLessThan10(){
    //     let res = await this.collection.find({"format.value":{$lt:10},"format.name":{$eq:"dvd"}},{projection:{_id:0,"format.value":1,"format.name":1}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }
     async getAllDvdFormatMoviesLessThan10(){
        let res = await this.collection.aggregate([
            {$match:{"format.name":"dvd", "format.value":{$lt: 10}}},
            {$unwind: "$format"},
            {$match:{"format.name":"dvd"}},{$project:{_id:0,name:1,formatName:"$format.name",formatValue:"$formatl.value"}}
        ]).toArray();
        await this.conexion.close()
        return res;
    }

    // async getAllMoviesWereCharactherNickNameIsCobb(){
    //     let res = await this.collection.find({"character.apodo":"Cobb"},{projection:{_id:0,"character.apodo":1}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }

    async getAllMoviesWereCharactherNickNameIsCobb(){
        let res = await this.collection.aggregate([
            {$match: {"character.apodo":"Cobb"}},
            {$unwind: "$character"},
            {$match:{"character.apodo":"Cobb"}},
            {$project:{_id:0,NicknameCharacter:"$character.apodo"}}
        ]).toArray();
        await this.conexion.close()
        return res;
    }



    //   async getAllMoviesWereActorIdsAre2And3(){
    //     let res = await this.collection.find({"character.id_actor":{$in:[2,3]}},{projection:{_id:0,"character.id_actor":1,name:1}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }


    async getAllMoviesWereActorIdsAre2And3(){
        let res = await this.collection.aggregate([
            {$match:{"character.id_actor":{$in:[2,3]}}},
            {$unwind: "$character"},
            {$match:{"character.id_actor": {$in:[2,3]}}},
            {$project:{_id:0,characterName:"$character.name",actorsId:"$character.id_actor"}}]).toArray();
        await this.conexion.close()
        return res;
    }

    // async getAllMoviesInBlurayFormat(){
    //     let res = await this.collection.find({"format.name":"Bluray"},{projection:{_id:0,"format.name":1,name:1}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }

    async getAllMoviesInBlurayFormat(){
        let res = await this.collection.aggregate([
            {$match:{"format.name":"Bluray"}},
            {$unwind: "$format"},
            {$match:{"format.name":"Bluray"}},
            {$project:{_id:0,formatName:"$format.name"}}
        ]).toArray();
        return res;
    }

    // async getAllCienceFictionMovies(){
    //     let res = await this.collection.find({genre:"Ciencia Ficción"},{projection:{_id:0,genre:1,name:1}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }


    async getAllCienceFictionMovies(){
        let res = await this.collection.aggregate([
            {$match: {"genre":"Ciencia Ficción"}},
            {$project:{_id:0,genre:1}}
        ]).toArray();
        await this.conexion.close()
        return res;
    }


    // async getAllMoviesWithAnActorRolMiguel(){
    //     let res = await this.collection.find({"character.rol":'principal'},{"character.apodo":'Miguel'},{projection:{_id:0,"character.apodo":1,"character.apodo":1}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }

    
    async getAllMoviesWithAnActorRolMiguel(){
        let res = await this.collection.aggregate([
            {$match:{"character.rol":"principal","character.apodo":"miguel"}},
            {$unwind: "$character"},
            {$match:{"character.rol":"principal","character.apodo":"miguel"}},
            {$project:{_id:0,name:"character.name",apodo:"character.apodo"}}
        ]).toArray();
        await this.conexion.close()
        return res;
    }


    // async getMovieWithatlessAFormatWithMoreThan100Copies(){
    //     let res = await this.collection.find({"format.copies":{$gte:100}},{projection:{_id:0,"format.copies":1,name:1}}).toArray();
    //     await this.conexion.close()
    //     return res;
    // }

    async getMovieWithatlessAFormatWithMoreThan100Copies(){
        let res = await this.collection.aggregate([
            {$match:{"format.copies":{$gte:100}}},
            {$unwind:"format.copies"},
            {$match:{"format.copies":{$gte:100}}},{$project:{_id:0,Formatcopies:"$format.copies"}}
        ]).toArray();
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
