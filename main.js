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
    favoriteToys: ["bone"],
    play: function() {
        let favToy = window.prompt("Enter favorite toy")
        this.favoriteToys.push(favToy)
    },
    run: function () {
        let doorStatus = window.prompt("Is the door open?")
        if (doorStatus === "yes"){
            console.log(`${coco.nicknames[0]} is out of here`)
        }
    },
    
}

console.log(coco.favoriteToys)
coco.bark("dog")
coco.pant("ran")
coco.play()
coco.run()

console.log(coco.favoriteToys)