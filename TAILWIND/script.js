class Calculadora{
    constructor(){
        this.OpAnterior = document.getElementById("OpAnterior");
        this.OpActual = document.getElementById("OpActual");    
        this.clear();
    }

    clear(){
        this.ValorActual="0";
        this.ValorAnterior="";
        this.Operacion= undefined;
        this.actPantalla();
    }
    delete(){
        if(this.ValorActual=== "0") return;
        if(this.ValorActual.length === 1){
            this.ValorActual= "0";
        }else {
            this.ValorActual=this.ValorActual.slice(0,-1);
        }
        this.actPantalla();
    }
    appendNumber(numero){
        if (numero === '.' && this.ValorActual.includes('.')) return;
        if (this.ValorActual === '0' && numero !== '.') {
            this.ValorActual = numero;
        } else {
            this.ValorActual += numero;
        }
        this.actPantalla();
    }
    elegir(Operacion){
        if (this.ValorActual==='') return;
        if(this.ValorAnterior !==''){
            this.calcular();
        }
        this.Operacion=Operacion;
        this.ValorAnterior=this.ValorActual;
        this.ValorActual="0";
        this.actPantalla();  
    }
    calcular(){
        let resultado;
        const anterior = parseFloat(this.ValorAnterior);
        const actual = parseFloat(this.ValorActual);
        if (isNaN(anterior) || isNaN(actual)) return;

        switch (this.Operacion) {
            case '+':
                resultado = anterior + actual;
                break;
            case '-':
                resultado = anterior - actual;
                break;
            case 'x':
                resultado = anterior * actual;
                break;
            case '/':
                resultado = anterior / actual;
                break;
            default:
                return;
        }

        this.ValorActual = resultado.toString();
        this.Operacion = undefined;
        this.ValorAnterior = '';
        this.actPantalla();
    }
    actPantalla(){
        this.OpActual.textContent=this.ValorActual;
        if (this.Operacion !=null){
            this.OpAnterior.textContent=`${this.ValorAnterior} ${this.Operacion}`;
        } else {
            this.OpAnterior.textContent="";
        }
    }
}

const calculadora = new Calculadora();