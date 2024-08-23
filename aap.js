

let textoArea = document.querySelector(".container__texto__area" )
let mensagem = document.querySelector("div.background-output")




function criptografar() {
    
    let texto = textoArea.value;        
    
    if (validar(texto)) {
        let textoCriptografado = texto
        .replaceAll("e", "enter") 
        .replaceAll("i", "imes" )
        .replaceAll("a", "ai"   )
        .replaceAll("o", "ober" )
        .replaceAll("u", "ufat" );
        
        
        mensagem.innerHTML = '';

        let textarea = document.createElement('textarea');
        textarea.id = "output-texto" ; 
        textarea.readOnly = true;
        textarea.textContent = textoCriptografado;
        mensagem.appendChild(textarea);


        let button = document.createElement('button');
        button.className = "btn-copiar";
        button.id = "copiar";
        button.textContent = "Copiar";
        button.addEventListener('click', copiar);
        mensagem.appendChild(button);

        textoArea.value = "";
        
    } else {
        alert("Texto não permitido")
    }                
                       
             
}

function descriptografar() { 

    let texto = textoArea.value; 
    
    if (validar(texto)){
        let textoDiscriptografado = texto
        .replaceAll("enter", "e") 
        .replaceAll("imes", "i" )
        .replaceAll("ai", "a"   )
        .replaceAll("ober", "o" )
        .replaceAll("ufat", "u" )

        console.log(textoDiscriptografado);

        mensagem.innerHTML = '';

        let textarea = document.createElement('textarea');
        textarea.id = "output-texto" ; 
        textarea.readOnly = true;
        textarea.textContent = textoDiscriptografado;
        mensagem.appendChild(textarea);


        let button = document.createElement('button');
        button.className = "btn-copiar";
        button.id = "copiar";
        button.textContent = "Copiar";
        button.addEventListener('click', copiar);
        mensagem.appendChild(button);

        textoArea.value = "";

    }else {
        alert("Texto não permitido")
    }        
                          

}

function copiar() {
    var textoCop = document.querySelector("textarea#output-texto").value;

    navigator.clipboard
        .writeText(textoCop)
        .then(() => {
            alert("Texto copiado!");
        })
        .catch((err) => {
            console.error("Erro ao copiar texto: ", err);
        });
        
}

function validar(textoDigitado) {
    const registro = /[A-ZÀ-Ü0-9]/;
    return ! registro.test(textoDigitado); 
    
}


