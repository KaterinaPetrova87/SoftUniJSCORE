function extensibleObject() {
    let obj = {
        extend: function (template) {
            for (let key in template) {
                if(typeof template[key] === 'function'){
                    obj.__proto__[key] = template[key];
                } else {
                    obj[key] = template[key];
                }
            }
        }
    };


    return obj;
}

let myObj = extensibleObject();
let template = {
    extensionMethod: function (){
        console.log('Something')
    },
    extensionProperty: 'someString'
};

myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);
