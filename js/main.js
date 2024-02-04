
function suma() {
    //explicacion algoritmo
    alert("algorimo que realiza una suma entre dos valores ingresados por un usuario")
    //Declaracion de variables nesesarias
    let A= 0;
    let B= 0;
    let S= 0;
    // capturamos los datos
     A= parseInt(prompt("Ingrese el primer valor"));
     B = parseInt(prompt ("Ingrese el segundo valor"));
    // Realizamos la operacion
    S = A+B;
    // Damos el resultado o respuesta
alert("El resultado de la suma es:"+ S)
}

function opBasicas() {
    alert("algorimo que realiza op basicas entre dos valores ingresados por un usuario")

    let q= 0;
    let w= 0;
    let s= 0;
    let r= 0;
    let m= 0;
    let d= 0;

    q= parseInt(prompt("Ingrese el primer valor"));
    w = parseInt(prompt ("Ingrese el segundo valor"));

    s =q+w;
    r =q-w;
    m = q*w;
    d= q/w;

    alert("El resultado de la suma es:"+ s);
    alert("El resultado de la resta es:"+ r);
    alert("El resultado de la multiplicacion es:"+ m);
    alert("El resultado de la divicion  es:"+ d)
}
function nCuadrado() {
    // Explicacion de algoritmo
    alert("Algoritmo que clacula el cuadrado de un numero ingresado");
    // Declaracon de variables
    let N,C =0;

    // Capturamos los datos
    N=parseInt(prompt("Ingrese el un valor"));
    // Realizamos la operacion
    C= N*N;
    // Mostramos el resultado
    alert("El resultado del numero a el cuadrado es:"+C);
}

function aTriangulo() {

    alert("Algoritmotmo que calcula el area de un triangulo")

    let t=0;
    let b=0;
    let a=0;

    b=parseInt(prompt("Ingrese la base del triangulo"));
    a=parseInt(prompt("Ingrese la altura del triangulo"));
    
    t=b*a/2;

    alert("El resultado bdel area del triangulo es"+t);
}

function cMedidas() {

    alert("Algoritmo que determina las pulgadas ,los kilometros y los milimetros de un valor dado en metros");

    let M=0;
    let P=0;
    let K=0;
    let L=0;

    M=parseInt(prompt("Ingresa tu valor en metros"));

    P= M*39.37;
    K=M/1000;
    L=M*1000;

    alert("El resultado en pulgadas es:"+P);
    alert("El resultado en kilometros es:"+K);
    alert("El resultado en milimetros es:"+L);

}

function numeroMayor() {
    alert("Algoritmo que determina el mayor de dos numeros ingresados");

    let N1,N2=0;

    N1=parseInt(prompt("Ingrese el primer numero"));
    N2=parseInt(prompt("Ingrese el segundo numero"));

    if (N1==N2) {
        alert("Los valores ingresados son iguales, no sea pato");
    }else if(N1>N2){
        alert(N1+"Es mayor que" + N2);
    } else {
        alert(N2+"Es mayor que " + N1);
    }
}

function numeroMenor() {
    alert ("Determinar el menor de tres números ingresados por el usuario");

    let n1,n2,n3=0;

    n1=parseInt(prompt("Ingrese el primer numero"));
    n2=parseInt(prompt("Ingrese el segundo numero"));
    n3=parseInt(prompt("Ingrese el tercer numero numero"));

    if ((n1==n2) && (n1==n3)){
        alert("Los numeros ingresados son iguales");
    } else if ((n1<n2) && (n1<n3)){
        alert(n1+"es el numero menor");
    }else if((n2<n3)&&(n2<n1)){
        alert (n2+"este es el numero menor");
    }else {
        alert (n3+"es el numero menor");
    }
    
}

function  promedioN() {
    alert ("algoritmo que determine si un estudiante aprobo o reprobo la materia de algoritmia teniendo en cuenta que en total son 7 notas entre uno y 10 y se aprueba con 6,1 ");

    let a1,a2,a3,a4,a5,a6,a7=0;
    let p=0;

    a1=parseInt(prompt("Ingrese la primera nota"));
    a2=parseInt(prompt("Ingrese la segunda nota"));
    a3=parseInt(prompt("Ingrese la tercera nota"));
    a4=parseInt(prompt("Ingrese la cuarta nota"));
    a5=parseInt(prompt("Ingrese la quinta nota"));
    a6=parseInt(prompt("Ingrese la sexta nota"));
    a7=parseInt(prompt("Ingrese la septima nota"));

    p=( (a1+a2+a3+a4+a5+a6+a7)/7);

    if (p<6.0){
        alert("Reprobo:"+p);
    }else{
        alert("Aprobo:" +p);
    }
}

function descuento() {

    alert("Algoritmo que aplica descuento según el número de kilos comprados");

    let K, M, S, D, T;

    K = parseInt(prompt("Ingrese el número de Kg: "));
    M = parseInt(prompt("Ingrese el valor de las manzanas: "));
    S = K * M;

    alert("El subtotal es " + S);

    if (K <= 2) {
        D = 0;
        T = S; 
        alert("No se aplicó ningún descuento, el total es " + T);
    } 
    else if (K >= 3 && K <= 5) {
        D = S * 0.1;
        T = S - D; 
        alert("Se aplicó un descuento del 10%, el total es " + T);
    } 
    else if (K >= 6 && K <= 10) {
        D = S * 0.15;
        T = S - D;
        alert("Se aplicó un descuento del 15%, el total es " + T);
    } 
    else if (K >= 11) {
        D = S * 0.2;
        T = S - D;
        alert("Se aplicó un descuento del 20%, el total es " + T);
    }    
}

    function salario(){

    alert ("Algoritmo que calcula las horas trabajadas semanales de un trabajador")
 
        let L, MA , MI, J , V , S, D, T, X = 0;

    L=parseInt(prompt("ingrese el total de horas trabajadas el lunes, si no trabajo ese dia ingrese 0: "));  
    MA=parseInt(prompt("ingrese el total de horas trabajadas el martes, si no trabajo ese dia ingrese 0: "));  
    MI=parseInt(prompt("ingrese el total de horas trabajadas el miercoles, si no trabajo ese dia ingrese 0: "));  
    J=parseInt(prompt("ingrese el total de horas trabajadas el jueves, si no trabajo ese dia ingrese 0: "));  
    V=parseInt(prompt("ingrese el total de horas trabajadas el viernes, si no trabajo ese dia ingrese 0: "));  
    S=parseInt(prompt("ingrese el total de horas trabajadas el sabado, si no trabajo ese dia ingrese 0: "));  
    D=parseInt(prompt("ingrese el total de horas trabajadas el domingo, si no trabajo ese dia ingrese 0: "));  
 
    T=(L+MA+MI+J+V+S+D);
    Horas = 12500;
    Extras = 18000;
    if (T <= 40){
        alert("El total de horas trabajadas es: " + T + "y el total devengado es $"+ T * Horas);
    }
    else if (T > 40){
        X = T-40;
        alert("El total de horas trabajadas es: " + T )
        alert("Valor a pagar por 40 horas = $"+ (Horas*40) + " + " +X+" horas extras = $" + (X*Extras));    
        alert("El total devengado es $"+ ((40 * Horas) +(X*Extras)));
    }
}

