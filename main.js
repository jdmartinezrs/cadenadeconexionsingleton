import {connect} from './helpers/db/connect.js';
import {movies} from './js/modules/movies.js';
let mongo = new movies()

//console.log(await mongo.getAllAccionMovies());
 //console.log(await mongo.getAllBlurayMoviesWithMoreThan200());
 //console.log(await mongo.getAllDvdFormatMoviesLessThan10());
 //console.log(await mongo.getAllMoviesWereCharactherNickNameIsCobb());
 //console.log(await mongo.getAllMoviesWereActorIdsAre2And3());
 //console.log(await mongo.getAllMoviesInBlurayFormat());
 //console.log(await mongo.getAllCienceFictionMovies());
 //console.log(await mongo.getAllMoviesWithAnActorRolMiguel());
 //console.log(await mongo.getMovieWithatlessAFormatWithMoreThan100Copies());
 //console.log(await mongo.getAllMoviesWithPrincipalActorNickNamedCobb());
 //console.log(await mongo.getAllMoviesInBlurayFormatWithMoreThan200Copies());
 console.log(await mongo.getAllMoviesInDvdFormatWithLessThan10());


 
