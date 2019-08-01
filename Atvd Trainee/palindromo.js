 
        // recebo uma palavra do usuario
        var palavraUsuario = window.prompt("Digite a palavra");

        // função de verificação do palindromo
        function VerificarPalindromo(palavraUsuario){ 
        
        // letras minusculas
        palavraUsuario = palavraUsuario.toLowerCase().replace(); 
        
        // split transforma em array e  reverse inverte as casas do array e depois transformo em string novamente
            palavraInversa = palavraUsuario.split("").reverse().toString();
        
        //percorre o array
            for (var i = 0; i < ((palavraInversa.length)-1); i++) {
        
        // para aqui usar o .replace para remover as virgulas e caracteres não afetarem a identificação
            palavraInversa=palavraInversa.replace(",","");}
        
        // verif se é palindromo ou nao
            if (palavraUsuario == palavraInversa) {
                console.log("Palindromo detectado!");
            } else {
                console.log("Não foi dessa vez ):");
            }
        }