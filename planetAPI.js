
//Class for storing JSON of planets following content below
//Allows methods to add, load and save, increment index for viewing
//Allows get for the data of current planet according to index

//planet json format:
//planets["name":"blah", "content":"blah", "image":"url"}, {}, {} ... ]
//

class planetData{
    constructor(){
        this.index = 0;
        this.data = {};
    }

    //Return the current index value
    returnIndex(){
        return this.index;
    }

    //Return all data held as a variable
    returnAllPlanets(){
        return this.data;
    }

    //Update the JSON held in this class
    update(loaded){
        this.data = loaded;
    }

    //Returns the details of the current planet(by current index value)
    returnPlanet() {
        return this.data.planets[this.index];    
    }

    addData(newContent){
        this.data.planets.push(newContent);
        console.log(this.data);
    }

    //For exporting the JSON ready for upload
    saveDataString() {
        return (JSON.stringify(this.data));
    }

    //Increment the index for returning the next set of details.
    //Constrains the index to the length of the JSON
    addIndex(){
        this.index += 1;
        if (this.index >= this.data.planets.length){
            this.index = 0;

        }
    }

};