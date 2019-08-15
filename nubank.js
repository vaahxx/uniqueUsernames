let arrayNomes = ['João', 'Maria', 'Leonardo', 'Maria', 'Alexandre', 'Maria', 'Evandro', 'Leonardo', 'Cristina', 'Maria', 'Mariana', 'Mariana', 'João', 'Evandro', 'Vitor', 'Mariana', 'Gabriela', 'Maria'];

function usernamesSystem(u) {
    // salva na variável um nome de cada vez, percorrendo o array até o final
    for (let i = 0; i < u.length; i++) {
        let firstName = u[i];
        // cada vez que entra em um nome novo, o counter é setado para 1.
        let nameCounter = 1;
        for (let j = i + 1; j < u.length; j++) {
            let secondName = u[j]; 
            // ao encontrar um nome igual, na posição do nome repetido, ele será removido e adicionado o mesmo nome concatenado com o counter atual.      
            if (firstName === secondName) {
                u.splice(j, 1, firstName + nameCounter)
                nameCounter++;
            }
        }
    }
    return u;
}

usernamesSystem(arrayNomes);