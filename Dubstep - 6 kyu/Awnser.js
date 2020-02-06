function songDecoder(song){
  const replaced =  song.replace(/WUB/g, ' ');
  const trimed = replaced.trim();
  const midleSpaces = trimed.replace( /\s\s+/g, ' ' )
  
  return midleSpaces
}