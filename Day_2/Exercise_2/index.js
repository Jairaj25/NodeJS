const person = {
    name: 'Jairaj Upadhyay',
    phone: 98989898,
    gender: 'Male',
    address: 'Mobiquity, Ahmedabad'
}

function checkProperty(object, key) {
    if(!object) {
        return 'Please enter object and property name to compare'
    }
    if(!key){
        return 'Please enter property name to check '
    }
    if(key in object){
        return 'Yes'
    }
    else{
        return 'No'
    }
}

console.log(checkProperty(person, 'name'));   //Yes
console.log(checkProperty(person, 'interests'));  //No
console.log(checkProperty(person));  //Please enter property name to check
console.log(checkProperty());  //Please enter object and property name to compare