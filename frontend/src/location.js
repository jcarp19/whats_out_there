// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates

// return zip code
// make sure it's on the list. If not return an err message
// return lon/lat , 
let zipLat = 84.784698;
let zipLon = 44.312238;
// loop through list to calculate distant from returned lon/lat and put in an array
let parkLat = 82.887195;
let parkLon = 42.528022;

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcDistance(zipLat, zipLon, parkLat, parkLon) {
    var R = 6371; // km
    var dLat = toRad(parkLat-zipLat);
    var dLon = toRad(parkLon-zipLon);
    var lat1 = toRad(zipLat);
    var lat2 = toRad(parkLat);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

// return the ten lowest(closest) parks