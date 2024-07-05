import {connect} from './helpers/db/connect.js';
import {movies} from './js/modules/movies.js';
let mongo = new movies()

//console.log(await mongo.getAllAccionMovies());
console.log(await mongo.getAllBlurayMoviesWithMoreThan200());