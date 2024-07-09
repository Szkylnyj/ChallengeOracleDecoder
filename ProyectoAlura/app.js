function envioFormulario(event, accion) {
    event.preventDefault();
    
    var inputTexto = document.getElementById('entradaUsuario').value;

    var textoModificado = '';
    if (accion === 'encriptar') {
        textoModificado = encriptar(inputTexto);
    } else if (accion === 'desencriptar') {
        textoModificado = desencriptar(inputTexto);
    }

    mostrarResultado(textoModificado);
}

function encriptar(texto) {
    texto = texto.toLowerCase();
    var encriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    var textoEncriptado = '';
    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        if (encriptacion[letra]) {
            textoEncriptado += encriptacion[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

function desencriptar(texto) {
    var desencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    for (var clave in desencriptacion) {
        if (desencriptacion.hasOwnProperty(clave)) {
            texto = texto.split(clave).join(desencriptacion[clave]);
        }
    }
    return texto;
}

function mostrarResultado(texto) {
    const imagen = document.getElementById('imagen');
    const temp = document.getElementById('temp');
    const textoResultado = document.getElementById('textoResultado');
    const botonCopiar = document.getElementById('botonCopiar');
    const cuerpo = document.getElementById('cuerpo');

    if (texto) {
        imagen.style.display = 'none';
        temp.style.display='none';
        textoResultado.style.display = 'block';
        textoResultado.textContent = texto;
        botonCopiar.style.display = 'block';
        cuerpo.classList.add('cuerpoConTexto');
    } else {
        imagen.style.display = 'block';
        textoResultado.style.display = 'none';
        botonCopiar.style.display = 'none';
        cuerpo.classList.remove('cuerpoConTexto');
    }
}

function copiarAlPortapapeles() {
    const textoResultado = document.getElementById('textoResultado');
    navigator.clipboard.writeText(textoResultado.textContent).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar al portapapeles', err);
    });
}
