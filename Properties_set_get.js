function car (model, color){
    this._model = model
    this._color = color

    Object.defineProperty(this, "model", {
        get : function(){
            return this._model.toUpperCase();
        },

        set : function(value){
            this._model = value;
        }
    })

    Object.defineProperty(this, "color", {
        get : function(){
            return this._color.toUpperCase();
        },

        set : function(value){
            this._color = value;
        }
    })

}

const carDetails = new car("BMW", "Black");
console.log(carDetails.model);
console.log(carDetails.color);

