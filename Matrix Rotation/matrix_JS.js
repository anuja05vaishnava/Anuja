 

function validate() 
{
    let column=document.getElementById('column').value;
    let row=document.getElementById('row').value;
    let rotation =document.getElementById('rotations').value;
    let matrix=document.getElementById('element').value;
    let arr=matrix.split(" ");
    let a=new Array(parseInt(row));
    let c=0;
    alert("Given elements are :"+ "\n" + arr);
    for(i=0;i<a.length;i++){
        a[i]=new Array(parseInt(column));
        }
     
    for(i=0;i<row;i++)
   {
       for(j=0;j<column;j++,c++)
       {
        a[i][j]=parseInt(arr[c]);
       
       }
    }
    console.log(a);
    let layers = Math.min(row,column) / 2;
for(layer = 0; layer < layers; ++ layer)
{
    for(x = 0; x < rotation % (2 * (row + column - 2 - 4 * layer));++x)
    {
        let i = layer, j = layer;
        let temp = a[layer][layer];
       
        while(i < row - 1 - layer)
        {
            let temp2 = a[i + 1][j];
            a[i + 1][j] = temp;
            temp = temp2;
            i += 1;
        }          
        while(j < column - 1 - layer)
        {
            let temp2 = a[i][j+1];
            a[i][j+1] = temp;
            temp = temp2;
            j+=1;
        }
        while(i > layer)
        {
            let temp2=a[i-1][j];
            a[i-1][j] =temp;
            temp=temp2;
            i-=1;
        }          
        while(j > layer)
        {
            let temp2 = a[i][j - 1];
            a[i][j - 1] = temp;
            temp = temp2;
            j -= 1;
        }
    }
}  


 document.writeln("Resultant Matrix : <br>")
for(i=0;i<row;i++)
{
    for(b=0;b<column;b++)
    {
        document.write(a[i][b]+" ");
    }
    document.write("<br>");
}  

}  


