use('sample_mflix');
//db.comments.find();
//db.comments.find({_id:ObjectId('5a9427648b0beebeb69579f5')});
//db.comments.findOne({email:'john_bishop@fakegmail.com' });
//db.comments.findOne({name:'John Bishop' });
//db.movies.findOne({type:'movie'},{rated:'TV-G'});

//db.movies.findOne($and({type:'movie'},{rated:'TV-G'}));

//db.movies.countDocuments({type:'movie'},{rated:'TV-G'});
//db.movies.find({type:'movie'},{rated:'TV-G'}).count();

//db.theaters.findOne();
//db.theaters.find({"location.address.state":'AL'}).count();

//db.theaters.find({"location.address.city":"La Quinta"}).count();
//db.theaters.findOne({ "location.address.city": "La Quinta" });

//db.movies.find({plot:{$regex:"America",$options:'i'}}).count();
//db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count()
//db.movies.find({ plot: { $regex: "street.$", $options: "i" } })


//db.movies.find({}).sort({runtime:-1}).limit(5);
//db.movies.find({runtime:{$lt:60}}).sort({runtime:-1}).limit(5);
//db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3);
//db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count();



//$in =have in array (OR) $all= have all value in array(AND)

/*
db.movies.find({
  countries: {$in: ["USA"]},
  year: {$gte: 1950, $lte: 1970}
})


db.movies.find({ 
  genres: { $all: ["Drama", "History"] },
 // released: { $gt: ISODate("1970-01-01T00:00:00Z") }
})//.count()
*/


//exercise 6 page72 
//db.movies.find({ cast: "Roy L. McCardell" }).count()
//db.movies.find({ directors: "Hal Roach" })//.count()
//db.movies.find({ directors: { $in: ["Hal Roach"] } }).sort({released:1}).limit(1);



//exrcise 6 pange73
/*
db.movies.aggregate([
  {
    
    $sum:{ awards.wins: { $toInt: "$awards.wins" }
  }
  }
]);*/