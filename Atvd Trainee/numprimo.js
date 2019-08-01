var sequencia =  [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]//sequencia de numeros escolhidas por mim
        function primos() { 

      
            var contandoprimo = 0;
            var contandodivisores = 0;
            for (var i = 0; i <sequencia.length; i++) { //percorre array
                for (var j = 1; j <=sequencia[i]; j++) { 
                    if (sequencia[i] % j == 0) { 
                        contandodivisores++;
                    }
                }
                if (contandodivisores == 2) {
                    contandoprimo++;
                }
                contandodivisores = 0;
            }
            return contandoprimo;
        }

