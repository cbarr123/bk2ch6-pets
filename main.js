const coco = {
    name: "Coco",
    species: "Canine",
    nicknames: ["Cocoa Nib"],
    age: 5,
    bark: function(barkFocus) {
        console.log(`Coco is barking at the ${barkFocus}`)
    },
    pant: function(pantFocus) {
        console.log(`${coco.nicknames[0]} is panting because she ${pantFocus}`)
    },
    favoriteToys: ["bone", "chicken"],
    play: function() {
        
    }
    
}


coco.bark("dog")
coco.pant("ran")