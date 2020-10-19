// Tri par sélection
// Trouver la valeur la + petite et la placer au premier rang
// 

function TriSelection(arr)
{
    var len = arr.length;       
    var tmp, i, j, min; 

    for(i = 0; i < len - 1; i++) 
    {
        min = i;
        for (j = i+1; j < len; j++)
        {
            if (arr[j] < arr[min])
            {
                min = j;
            }
            
        }
        tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
    return arr;
}


arr = [4,6,3,2,0,9,5,2,1];
console.log(TriSelection(arr))