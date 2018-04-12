class Stringer {
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(length){
        this.innerLength += length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    toString () {
        if(this.innerString.length > this.innerLength){
            return this.innerString = this.innerString.substr(0, this.innerLength) + '...';
        }
        if(this.innerLength === 0){
            return '...';
        }
    }
}

let result = new Stringer(2);
console.log(result.toString())