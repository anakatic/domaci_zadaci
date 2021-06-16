//Dodavanje dokumenata (filmova) kolekciji
db.collection("movies").doc("movie-02")
.set({
    name: "Drugi film",
    director:{ name:"Petar", surname: "Petrovic" },
    release_year: 2005,
    genres: ["triler", "horor"],
    rating: 7.6       
})
.then(function() {
   console.log("Uspesno dodat dokument kolekciji");
})
.catch(err => {
    console.log("Neuspesno dodavanje: " + err);
});



db.collection("movies").doc("movie-03")
.set({
    name: "Treci film",
    director:{ name:"Mira", surname: "Miric" },
    release_year: 2018,
    genres: ["komedija", "romantika"],
    rating: 6.6       
})
.then(function() {
   console.log("Uspesno dodat dokument kolekciji");
})
.catch(err => {
    console.log("Neuspesno dodavanje: " + err);
})



db.collection("movies").doc("movie-04")
.set({
    name: "Cetvrti film",
    director:{ name:"Pera", surname: "Peric" },
    release_year: 2015,
    genres: ["istorijski", "drama"],
    rating: 8.3       
})
.then(function() {
   console.log("Uspesno dodat dokument kolekciji");
})
.catch(err => {
    console.log("Neuspesno dodavanje: " + err);
})




//Menjanje podataka o nekim filmovima u bazi
db.collection("movies").doc("movie-01")
.update({
      name: "Drugi film (izmena)"   
})
.then(function() {
   console.log("Uspesno azuriran dokument");
})
.catch(err => {
    console.log("Neuspesno azuriranje: " + err);
});



db.collection("movies").doc("movie-03")
.update({
      rating: 8.9  
})
.then(function() {
   console.log("Uspesno azuriranje");
})
.catch(err => {
    console.log("Neuspesno azuriranje: " + err);
});


//Dodaje žanr nekom filmu
let movie3 = db.doc("movies/movie-03")
movie3.update({
    genres: firebase.firestore.FieldValue.arrayUnion("drama")
})
.then(function() {
    console.log("Uspesno dodat zanr");
 })
 .catch(err => {
     console.log("Neuspesno dodat zanr: " + err);
 });


//Briše žanr nekom filmu
let movie2 = db.doc("movies/movie-02")
movie2.update({
    genres: firebase.firestore.FieldValue.arrayRemove("horor")
})
.then(function() {
    console.log("Uspesno obrisan zanr");
})
 .catch(err => {
     console.log("Neuspesno obrisan zanr: " + err);
});


//Menja ime ili prezime nekom režiseru.
movie3.update({
    "director.surname": "Markovic"
})
.then(function() {
    console.log("Uspesno izmenjeno prezime reziseru");
})
 .catch(err => {
     console.log("Neuspesno izmenjeno prezime reziseru: " + err);
});