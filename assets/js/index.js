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
                url = "https://bit.ly/2KiHiVK";
                title = "숯한날 1종 주방세제";
                text = "식용 참숯과 천연 유래 성분으로<br />만든 안전한 대용량 주방세제";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '2' : 
                url = "https://bit.ly/38pAtcW";
                title = "그레이 원데이 수세미";
                text = "세균 범벅 수세미 대신 하루 한 장씩 <br />두 달 동안 매일 새로운 수세미!";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '3' : 
                url = "https://bit.ly/3aGbpkm";
                title = "그레이 원데이 행주";
                text = "99.9% 항균! 삶을 필요 없는<br />빨아 쓰는 원데이 행주";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '4' : 
                url = "https://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EC%8B%9C%EC%9B%94%EB%B3%B4%EB%A6%84-%EB%8C%80%EC%9A%A9%EB%9F%89-%EC%86%90%EC%84%B8%EC%A0%95%EC%A0%9C-%ED%95%B8%EB%93%9C%EC%9B%8C%EC%8B%9C/96/category/43/display/1/";
                title = "시월보름 핸드워시";
                text = "전 성분 EWG 그린 등급<br />온 가족이 함께 쓰는 안심 핸드워시";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '5' : 
                url = "https://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%ED%93%A8%EB%A9%94%EB%85%B8-%EB%AF%B8%EB%81%84%EB%9F%BC%EB%B0%A9%EC%A7%80-%EC%9A%95%EC%8B%A4%ED%99%94%EB%8B%A4%EC%9A%A9%EB%8F%84%ED%99%94/93/category/1/display/2/";
                title = "퓨메노 욕실화";
                text = "물기 많은 욕실에서도<br />미끄러짐 없이 안전한<br />논슬립 프리미엄 욕실화";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '6' : 
                url = "https://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EB%88%84%EB%B3%BC%EB%9D%BC-eva-%EB%AF%B8%EB%81%84%EB%9F%BC-%EB%B0%A9%EC%A7%80-%EC%9A%95%EC%8B%A4%ED%99%94%EB%8B%A4%EC%9A%A9%EB%8F%84%ED%99%94/90/category/43/display/1/";
                title = "누볼라 욕실화";
                text = "욕실 인테리어의 끝!<br />구름처럼 가벼운<br />디자인 바이 이태리 욕실화";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '7' : 
                url = "https://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%ED%98%B8%ED%95%91-eva-%EB%AF%B8%EB%81%84%EB%9F%BC%EB%B0%A9%EC%A7%80-%EC%9A%95%EC%8B%A4%ED%99%94/91/category/43/display/1/";
                title = "EVA 미끄럼방지 욕실화";
                text = "호핑 욕실화 아이와 함께 신기 좋은 <br />러블리한 토끼 디자인 욕실화";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '8' : 
                url = "http://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EC%95%88%EB%85%95%ED%95%9C%EC%A7%80-%ED%95%9C%EC%A7%80-%EC%83%A4%EC%9B%8C%ED%83%80%EC%9B%94/95/category/43/display/1/";
                title = "안녕한지 샤워타월";
                text = "건조가 빨라 위생적인<br />한지로 만든 샤워타월";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '9' : 
                url = "https://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EC%98%A4%EB%B9%84%EB%8B%A4-%EB%B0%B0%EC%88%98%EA%B5%AC-%ED%81%B4%EB%A6%AC%EB%84%88/101/category/43/display/1/";
                title = "오비다 배수구 클리너";
                text = "배수구 속 찌든 때와 악취를<br />한 번에 잡아주는 강력한 발포 클리너";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '10' : 
                url = "http://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EB%AA%A9%EC%9A%95%EC%9D%BC-%EC%A0%84%EC%9E%90%EB%A0%88%EC%9D%B8%EC%A7%80-%ED%81%B4%EB%A6%AC%EB%84%88/104/category/43/display/1/";
                title = "전자레인지 클리너";
                text = "전자레인지 속 찌든 때와 악취를 제거해 주는 1분 간편 청소 시트";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '11' : 
                url = "https://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EB%B1%80%EB%B6%80500-%EC%B9%9C%ED%99%98%EA%B2%BD-%EB%8C%80%EB%82%98%EB%AC%B4-%ED%99%94%EC%9E%A5%EC%A7%80/94/category/1/display/2/";
                title = "뱀부500 대나무 화장지";
                text = "목재 펄프 화장지를 대신하는<br />먼지 없는 대나무 화장지";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '12' : 
                url = "https://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EC%86%8C%EC%86%8C%EC%97%B0-%EC%84%B8%ED%83%81%EC%A1%B0-%ED%81%B4%EB%A6%AC%EB%84%88/100/category/43/display/1/";
                title = "소소연 세탁조 클렌저";
                text = "냄새나는 빨래 해결!<br />유해화학성분 없는<br />간편한 세탁조 클리너";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '13' : 
                url = "http://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EC%98%AC%EB%B0%94%EB%A6%BC-%EC%8B%9C%ED%8A%B8%ED%98%95-%EC%84%B8%ED%83%81%EC%84%B8%EC%A0%9C/102/category/43/display/1/";
                title = "시트형 세탁세제";
                text = "찬물에도 잘 녹는<br />간편한 고농축 한 장 세제";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '14' : 
                url = "https://dearcus.co.kr/product/%EB%94%94%EC%96%B4%EC%BB%A4%EC%8A%A4-%EC%98%AC%EB%B0%94%EB%A6%BC-%EC%8B%9C%ED%8A%B8%ED%98%95-%EC%84%B8%ED%83%81%EC%84%B8%EC%A0%9C/102/category/43/display/1/";
                title = "올바림 시트세제";
                text = "찬물에도 잘 녹는<br />간편한 고농축 한 장 세제";
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