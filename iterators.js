// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
function listNames(data){
    return data.forEach(song => {
        console.log(song.name)
    })
}

// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
function listSongDetails(data){
    return data.forEach(song => console.log(`${song.name}, by ${song.artist} (${song.duration}).`))
}

// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.
function summerJamCount(data){
    let count = 0;
    data.forEach(song => {
     if(song.month === 6 || song.month === 7 || song.month === 8){
       count += 1;
     }
    })
  return count;
}

// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.
function getDurations(data){
   return data.map(song => song.duration) 
}

// Write a function called getDurationsInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.
function getDurationsInSeconds(data){
    return data.map(song => {
        let s = song.duration.split(':')
        return parseInt(s[0])*60 + parseInt(s[1])
    }
    ) 
}

// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)
function getMainArtists(data){
    return data.map(song => {
        return song.artist.split('featuring')[0].trim()
    })
}

// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
function getBigHits(data){
    return data.filter(song => song.weeksAtNumberOne >= 10)
}

// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.
function getShortSongs(data){
    return data.filter(song => parseInt(song.duration) < 3)
}

// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.
function getSongsByArtist(data, artist){
    return data.filter(song => song.artist === artist)
}

// Refactor summerJamCount to use reduce!
function summerJamCount(data){
    const result = data.reduce((acc,curr) => {
     if(curr.month === 6 || curr.month === 7 || curr.month === 8){
       acc += 1;
     }
      return acc;
    }, 0)
    return result;
}

// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
function getTotalDurationInSeconds(data){
    const array = getDurationsInSeconds(data);
    return array.reduce((acc,curr)=> acc + curr, 0)
  }

// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
function getSongCountByArtist(data){
    // need to add conditional to add featuring songs as well?
    return data.reduce(function(a, b){
    a[b.artist] = a[b.artist] + 1 || 1
    return a;
  }, {});
}

// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.
function averageWeeksAtNumberOne(data){
    const totalWeeks = data.reduce((acc,curr)=> acc + curr.weeksAtNumberOne, 0);
    return Math.floor(totalWeeks / data.length);
}
