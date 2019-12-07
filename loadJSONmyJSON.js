
class loadJSONData {
  constructor(address){
    this.loadAddress = address;
    this.saveAddress = address; //"https://cors-anywhere.herokuapp.com/" + 
    this.info = {};
    this.infoToSave = {};
    this.xhr = new XMLHttpRequest();
    this.sxhr = new XMLHttpRequest();
    this.loadContent();
  }

  //fileData function for outputting content to others
  getFileData(){
    return this.info;
  }

  newData(newJSON){
    this.infoToSave = newJSON;
  }

  loadContent() {
    this.xhr.open("GET", this.loadAddress);

    this.xhr.responseType = 'json';

    this.xhr.send();

    let thisCopy = this;

    this.xhr.onload = function() {
        thisCopy.onLoadResult();
    };
  }

  onLoadResult(){
      alert("Data Loaded"); 

      this.info = this.xhr.response;

      console.log(this.info);
  }

  saveContent(){  
    // Send file to the server:
    console.log("Save request");
    this.sxhr.open("PUT", this.saveAddress, true);
    this.sxhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    this.sxhr.send(this.infoToSave);

    let thisCopy = this;
    
    this.sxhr.onreadystatechange = function() {
        thisCopy.onSaveResult();

      }
  }

  onSaveResult(){
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText));
      alert("Thank you, data added!")

      this.info = this.infoToSave;


    }
  }
};