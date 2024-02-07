const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

// table MovieDirector
Movie.belongsToMany(Director, {through: "MovieDirector"})
Director.belongsToMany(Movie, {through: "MovieDirector"})

// table MovieGenre
Movie.belongsToMany(Genre, {through: "MovieGenre"})
Genre.belongsToMany(Movie, {through: "MovieGenre"})

// 
Movie.belongsToMany(Actor, {through: "MovieActor"})
Actor.belongsToMany(Movie, {through: "MovieActor"})