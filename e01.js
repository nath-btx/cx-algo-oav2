// Bubble sorting

// i parcours chaîne
// Comparer i à i + 1
// à chaque itération la plus grande valeur se retrouve à la fin

function BubbleSort(arr)
{
    
    let len = arr.length;
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < len; j++)  
        {
            if (arr[j] > arr[j+1])
            {
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
        len -= 1;      
    }   
    return arr;
}

arr = [4,6,3,2,0,9,5,2,1];
console.log(Bubblesort(arr))
