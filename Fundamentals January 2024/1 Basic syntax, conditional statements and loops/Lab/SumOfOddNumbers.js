function sumichkataBrat(n){
    let nomerche = 0;
    let sumichka =0;
    for (i=1; i<=n; i++){
        nomerche = 1 + 2*(i-1);
        console.log(nomerche);
        sumichka += nomerche;
    }
    console.log(`Sum: ${sumichka}`);
}
sumichkataBrat(5);