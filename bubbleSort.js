var a = [87,20, 3, 4, 1, 10, 0, 8, 5];
var sorted = false;
function bubbleSort(a){
    while(!sorted){
        for(var i = 0; i < a.length; i++){
            if(a[i + 1] < a[i]){
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
            }

        }
        sorted = true;
        for(var j = 0; j < a.length; j++){
            if(a[j + 1] < a[j]){
                sorted = false;
            }
        }
    }
}
bubbleSort(a);
console.log(a);
