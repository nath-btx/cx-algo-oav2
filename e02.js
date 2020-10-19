// Tri par insertion

function Insertion(arr) {
    var len = arr.length;       
    var tmp, i, j;                  
    
    for(i = 1; i < len; i++) 
    {
      tmp = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > tmp) 
      {
        arr[j+1] = arr[j];
        j--;
      }
      
      arr[j+1] = tmp;
    }
    return arr;
  }

  
arr = [4,6,3,2,0,9,5,2,1];
console.log(Insertion(arr))