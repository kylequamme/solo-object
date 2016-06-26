//Pick your favorite team (sports or otherwise) and create an object
//with 10 properties and a function that pretty prints the values
//(prints them in a human readable form, example below).

var fav = {
  name: 'Hendrick Racing Team #24',
  driver: ['Chase', 'Elliott'],
  primarySponsor: 'NAPA Autoparts',
  associateSponsors : ['3M', 'Sunenergy', 'Mountain Dew', 'KBB'],
  crewChief: ['Alan', 'Gustafson'],
  carModel: 'Chevrolet SS',
  stats: {wins: 0, top5s: 6, top10s: 11, poles: 2, lapsLead: 118},
  father: ['Bill', 'Elliott'],
  owner: ['Rick', 'Hendrick'],
  yearFormed: 1992,

}

function describeTeam(team) {
  console.log('My favorite team is ' + team.name +
  '. Their driver is ' + team.driver + '. He drives a ' + team.carModel +
  ' sponsored by ' + team.primarySponsor + ', as well as ' +
  listSponsors() + ' The team crew chief is ' + team.crewChief +
  '. The team has ' + listStats() + team.driver +
  '\'s father is \'Hall of Fame Class of 2015\' driver ' +
  team.father + '. The team is owned by ' + team.owner + '. ' + team.owner + ' started ' +
  team.name + ' in ' + team.yearFormed + '.');

}

function listSponsors(){
  var prettySponsors = ''
  for(var i = 0; i < (fav.associateSponsors.length - 1); i++){
    prettySponsors += fav.associateSponsors[i] + ', '
  }
  prettySponsors += 'and ' + fav.associateSponsors[i] + '.';
  return prettySponsors;
}

function listStats(){
  var prettyStats = '';
  prettyStats += fav.stats.wins + ' wins, ';
  prettyStats += fav.stats.top5s + ' top 5\'s, ';
  prettyStats += fav.stats.top10s + ' top 10\'s, ';
  prettyStats += fav.stats.poles + ' qualifying poles, ';
  prettyStats += 'and ' + fav.stats.lapsLead + ' laps lead on the season. ';
  return prettyStats;
}
console.log(fav.associateSponsors.length);
describeTeam(fav);
