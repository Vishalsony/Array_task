

function findmax()
{
    var array = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    maxvalue=Math.max(...array);
    document.querySelector('.max').textContent=maxvalue;
}
function findmin()
{
    var array = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    minvalue=Math.min(...array);
    document.querySelector('.min').textContent=minvalue;
}
function secmax()
{
    const points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    points.sort(function(a, b){return b-a});
    
    document.querySelector(".sec_max").textContent = points[1]
}
function secmin()
{
    const points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    points.sort(function(a, b){return a-b});
    
    document.querySelector(".sec_min").textContent = points[1]
}

function oddnum()
{
    let points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    let pa =[];
    
    points.forEach((num)=>{
    if (num % 2 != 0 && num > 0)
    {
        pa.push(num);
    }
    });
    document.querySelector(".odd").textContent = pa 
}

function evennum()
{
    let points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    let pa =[];
    
    points.forEach((num)=>{
    if (num % 2 == 0 && num > 0)
    {
        pa.push(num);
    }
    });
    document.querySelector(".even").textContent = pa 
}

function negativenum()
{
    let points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    let neg=[];

    points.forEach((num) => 
    {
        if (num < 0)
        {
            neg.push(num);
        }
    });
    document.querySelector(".negative").textContent = neg
}

function positivenum()
{
    let points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    let neg=[];

    points.forEach((num) => 
    {
        if (num > 0)
        {
            neg.push(num);
        }
    });
    document.querySelector(".positive").textContent = neg
}

function biginput()
{
    let points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    let po =[];

     points.forEach((num) => 
    {
        if (num > document.getElementById('textBox1').value )
        {
            
            po.push(num);
        }
    });
    document.querySelector(".a").textContent = po;
}

function smallinput()
{
    let points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    let po =[];

     points.forEach((num) => 
    {
        if (num < document.getElementById('textBox2').value )
        {
            
            po.push(num);
        }
    });
    document.querySelector(".b").textContent = po;
}

function accnum()
{
    const points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    points.sort(function(a, b){return a-b});
    
    document.querySelector(".acc").textContent = points
}

function decnum()
{
    const points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    points.sort(function(a, b){return b-a});
    
    document.querySelector(".dec").textContent = points
}

function rendomnum()
{
    const points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    let r = points[Math.floor(Math.random() * points.length)];

    document.querySelector(".ren").textContent = r;
}

function sum()
{
    var points = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    var total =0;
    
    for(let i=0; i < points.length;i++)
    {
        total  += points[i];
    }

    document.querySelector(".tot").textContent = total;
}

 function after()
 {
    var arr = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    rp =[];

    for (let i =2;i < arr.length;i+=3)
    {
        rp.push(arr[i]);
    }
    document.querySelector(".afth").textContent = rp;

 }

function square() 
{
    var arr = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    rp =[];

    for (var i = 0 ; i < arr.length; i++) {
        rp.push(arr[i] * arr[i]);
    } 
    document.querySelector(".sq").textContent = rp;
}

function equal()
{
    var arr = [1,2,3,4,2,2,3,10,5,-100.1,10,5,6,7,-100,100,100.1,1000];
    rp =[];
    
    
        tim= arr.filter((item, index) => index !== arr.indexOf(item))
        rp.push(tim);
     

    document.querySelector('.eq').textContent=rp;
}



    

