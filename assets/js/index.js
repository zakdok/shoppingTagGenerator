const onAddFormList = () => {
    const listWrapper = document.querySelector('.create-link-area .link-wrap');
    const listContainer = listWrapper.querySelector('.input-list-area');
    const copyList = listContainer.cloneNode(true);
    listWrapper.appendChild(copyList);

    const deleteBtn = listWrapper.children[listWrapper.children.length - 1].querySelector('.delete');
    deleteBtn.closest('.delete-wrap').classList.add('show');
    deleteBtn.addEventListener('click', () => {
        deleteBtn.closest('.input-list-area').remove();
    });
}

const onSubmit = () => {
    const formLists = document.querySelectorAll('.create-link-area .link-wrap .input-list-area');
    let linkText = '';
    formLists.forEach((list, idx) => {
        const left = list.querySelector('input[name="left"]').value;
        const top = list.querySelector('input[name="top"]').value;
        const imageWidth = 800;

        const leftSum = left / imageWidth * 100;
        const topSum = left / imageWidth * 100;

        if (idx > 0) {
            linkText += '`';
        }

        const productType = list.querySelector('select[name="product"]').value;

        let url;
        let title;
        let text;

        switch (productType){
            case '1' : 
                url = "https://naver.com";
                title = "네이버";
                text = "네이버 <br />설명";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '2' : 
                url = "https://daum.com";
                title = "다음";
                text = "다음 <br />설명";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
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