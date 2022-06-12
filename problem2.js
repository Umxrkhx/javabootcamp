function fibonacci(num)
{

    let n=0;
    let n1=0;
    let n2=0;
    let sum=0;
    const evennumber=[];

    for(let x = 0;x<=num;x++)
        {
            if(x==0)
                n = 0;
            if(x==1)
                 n = 1;
             n1 = n;
             n = n1 + n2;
            n2 = n1;
            if(n % 2 == 0)
                {
                        //console.log(n);
                     evennumber.push(n);
                }
        }

        for(let y =0;y<evennumber.length;y++)
        {
                sum += evennumber[y];
        }



        return sum;
}

console.log(fibonacci(10));


