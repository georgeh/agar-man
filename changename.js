const Twitter = require('twitter')
const titleCase = require('title-case')
const settings = require( './settings.json' )

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const client = new Twitter( settings )
const randomizedName = shuffle( process.argv.slice( 2 ) )
const name = titleCase( randomizedName.join( ' ' ) );
client.post( 'account/update_profile', { name }, error => {
	if ( error ) {
		console.error( error )
		process.exit( 1 );
	}
} )
