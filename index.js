const readValues = () => {
    const {text, checkbox} = {
        text: document.getElementById('myTextField').value,
        checkbox: document.getElementById('myCheckbox').checked
    }

    if (checkbox){
        let div = document.createElement('div');
        div.classList.add('red');
        div.innerText = `{ \n text: ${text} \n checkbox: ${checkbox} \n }`;
        document.getElementById('app').append(div);
    }
}

const revealTitle = () => {
    document.getElementById('title').classList.toggle('invisible')
}