function validaCPF(cpf) {
    if(cpf.length != 11) {
        return false;
    } else { 

        //var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);
        
        var soma = 0;
        for (let i=0; i<9; i++) {/*let i=10; i>1; i--)*/ 
            soma += cpf.charAt(i)*(10-i)    /*soma += numeros.charAt(10- i) * i;*/
        }
        
        var resultado = (soma*10) % 11 == 10 ? 0 : (soma*10) % 11; /*var resultado =  (soma % 11) < 2 ? 0 : 11 -(soma % 11);*/
        //validação primeiro digito
            if (resultado != digitos.charAt(0)) {
                return false
            }
        
        soma = 0;
        resultado = 0;
        for (let j=0; j<10; j++) {
            soma += cpf.charAt(j)*(11-j)
        }
       
        resultado = (soma*10) % 11 == 10 ? 0 : (soma*10) % 11; /*var resultado =  (soma % 11) < 2 ? 0 : 11 -(soma % 11);*/
        //validação segundo digito
            if (resultado != digitos.charAt(1)) {
                return false
            }

        return true;
    }   
}


function validacao () {
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    var cpf = document.getElementById("cpf_digitado").value;
    var resultadoValidacao = validaCPF(cpf);
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}