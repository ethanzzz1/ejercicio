function calcularBilletes() {
    const nombreUsuario = document.getElementById("nombreUsuario").value;
    const cantidadRetiro = parseInt(document.getElementById("cantidadRetiro").value);
    
    const billetes100 = Math.floor(cantidadRetiro / 100);
    const billetes50 = Math.floor((cantidadRetiro % 100) / 50);
    const billetes20 = Math.floor(((cantidadRetiro % 100) % 50) / 20);
    const billetes10 = Math.floor((((cantidadRetiro % 100) % 50) % 20) / 10);
    const billetes5 = Math.floor(((((cantidadRetiro % 100) % 50) % 20) % 10) / 5);
    const billetes1 = (((cantidadRetiro % 100) % 50) % 20) % 10 % 5;
    
    document.getElementById("billetes100").innerHTML = `Billetes de 100: ${billetes100}`;
    document.getElementById("billetes50").innerHTML = `Billetes de 50: ${billetes50}`;
    document.getElementById("billetes20").innerHTML = `Billetes de 20: ${billetes20}`;
    document.getElementById("billetes10").innerHTML = `Billetes de 10: ${billetes10}`;
    document.getElementById("billetes5").innerHTML = `Billetes de 5: ${billetes5}`;
    document.getElementById("billetes1").innerHTML = `Billetes de 1: ${billetes1}`;
    }
    