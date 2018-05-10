var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.foreach(function(image) {
    var area = image.height * image.width;
    areas.push(area);
});

function findWhere(array, criteria) {
  return array.find(function(element){
        let keys = Object.keys(criteria);
        let test = true
        keys.forEach(function(key){
            if (!(element.hasOwnProperty(key) && element[key] === criteria[key])) {
                test = false;
            }
            
        });
        return test;
      })
}

//The return value of Array#push is the new length of the array after the push
function unique(array) {
    return array.reduce(function(accumulator, current){
        if(!accumulator.find(function(item){
            return item === current;
        }))
          accumulator.push(current);;
          
        return accumulator;
    },[]);
}

const numbers = [1, 2, 3];

function double([number, ...rest]) {
  	if(rest.length === 0){
	  	return [number*2];
    } else {
      return [number*2, ...double(rest)];
    }
}