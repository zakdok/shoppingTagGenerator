const onSubmit = () => {
    const inputElements = document.querySelectorAll('.create-link-area .input-list-area .list-wrap .input-wrap input');
    let linkText = '';
    let inputArray = [];
    let outputArray = [];
    inputElements.forEach((input, idx) => {
        let inputValue = input.value;
        const inputName = input.name;
        const width = 800;
        inputArray = inputValue.split(',');

        inputArray.forEach((array, idx) => {
            if(inputName === 'link'){
                outputArray[idx] += inputArray[idx] + '?';
            } else if (inputName === 'leftPosition') {
                const sum = inputArray[idx] / width * 100;
                outputArray[idx] += sum.toFixed(2) + '%?';
            } else if (inputName === 'topPosition') {
                const sum = inputArray[idx] / width * 100;
                outputArray[idx] += sum.toFixed(2) + '%?';
            } else if (inputName === 'title') {
                outputArray[idx] += '<h3>' + inputArray[idx] + '</h3>';
            } else if (inputName === 'text') {
                outputArray[idx] += inputArray[idx].replace(/(?:\r\n|\r|\n)/g, '<br />');
            }
        })
    })
    outputArray.forEach((array, idx) => {
        if(idx !== outputArray.length - 1){
            linkText += outputArray[idx].replace('undefined', '') + '`';
        } else {
            linkText += outputArray[idx].replace('undefined', '')
        }
    })
    const outputElements = document.querySelector('.link-output-area .copy-text-area .text-wrap .text');
    outputElements.innerText = linkText;
}

const copyText = () => {
    const obj = document.querySelector(".link-output-area .copy-text-area .text-wrap .text");
    const range = document.createRange();
    range.selectNode(obj.childNodes[0]); //텍스트 정보를 Range 객체에 저장
    const sel = window.getSelection();
    sel.removeAllRanges(); //기존 선택정보 삭제
    sel.addRange(range); //텍스트 정보 선택
    document.execCommand("copy"); //복사
    sel.removeRange(range); //선택 정보 삭제
}