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
        const imageWidth = document.querySelector('.create-link-area .ratio-input-wrap input').value;

        const leftSum = left / imageWidth * 100;
        const topSum = top / imageWidth * 100;

        if (idx > 0) {
            linkText += '`';
        }

        const productType = list.querySelector('select[name="product"]').value;

        let url;
        let title;
        let text;

        switch (productType){
            case '1' : 
                url = "/product/숯한날-1종-주방세제/88/category/24/display/1/";
                title = "숯한날 1종 주방세제";
                text = "식용 참숯과 천연 유래 성분으로<br />만든 안전한 대용량 주방세제";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '2' : 
                url = "/product/그레이-원데이-수세미-오리지널/87/category/24/display/1/";
                title = "그레이 원데이 수세미";
                text = "세균 범벅 수세미 대신 하루 한 장씩 <br />두 달 동안 매일 새로운 수세미!";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '3' : 
                url = "/product/그레이-원데이-행주/89/category/24/display/1/";
                title = "그레이 원데이 행주";
                text = "99.9% 항균! 삶을 필요 없는<br />빨아 쓰는 원데이 행주";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '4' : 
                url = "/product/시월보름-프리미엄-핸드워시/96/category/25/display/1/";
                title = "시월보름 핸드워시";
                text = "전 성분 EWG 그린 등급<br />온 가족이 함께 쓰는 안심 핸드워시";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '5' : 
                url = "/product/퓨메노-욕실화다용도화/93/category/25/display/1/";
                title = "퓨메노 욕실화";
                text = "물기 많은 욕실에서도<br />미끄러짐 없이 안전한<br />논슬립 프리미엄 욕실화";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '6' : 
                url = "/product/누볼라-욕실화다용도화/90/category/25/display/1/";
                title = "누볼라 욕실화";
                text = "욕실 인테리어의 끝!<br />구름처럼 가벼운<br />디자인 바이 이태리 욕실화";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '7' : 
                url = "/product/호핑-욕실화다용도화/91/category/25/display/1/";
                title = "호핑 욕실화(다용도화)";
                text = "호핑 욕실화 아이와 함께 신기 좋은 <br />러블리한 토끼 디자인 욕실화";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '8' : 
                url = "/product/안녕한지-한지-샤워타월/95/category/25/display/1/";
                title = "안녕한지 샤워타월";
                text = "건조가 빨라 위생적인<br />한지로 만든 샤워타월";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '9' : 
                url = "/product/오비다-배수구-클리너/101/category/27/display/1/";
                title = "오비다 배수구 클리너";
                text = "배수구 속 찌든 때와 악취를<br />한 번에 잡아주는 강력한 발포 클리너";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '10' : 
                url = "/product/목욕일-전자레인지-클리너/104/category/42/display/1/";
                title = "목욕일 전자레인지 클리너";
                text = "전자레인지 속 찌든 때와 악취를 제거해 주는 1분 간편 청소 시트";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '11' : 
                url = "/product/뱀부500-대나무-화장지/94/category/27/display/1/";
                title = "뱀부500 대나무 화장지";
                text = "목재 펄프 화장지를 대신하는<br />먼지 없는 대나무 화장지";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '12' : 
                url = "/product/소소연-세탁조-클렌저/100/category/27/display/1/";
                title = "소소연 세탁조 클렌저";
                text = "냄새나는 빨래 해결!<br />유해화학성분 없는<br />간편한 세탁조 클리너";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '13' : 
                url = "/product/올바림-시트형-세탁세제/102/category/27/display/1/";
                title = "올바림 시트형 세탁세제";
                text = "찬물에도 잘 녹는<br />간편한 고농축 한 장 세제";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '15' : 
                url = "/product/도돌이-찌든때-클리너/110/category/24/display/1/";
                title = "도돌이 찌든때 클리너";
                text = "탄 냄비, 기름때, 인덕션 찌든때까지! <br />다용도 찌든때 클리너";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '16' : 
                url = "/product/아무틈-제습제-걸이형-파우치/112/category/27/display/1/";
                title = "아무틈 제습제";
                text = "아무틈에나 쏙 들어가는 <br />젤리로 변하는 슬림 제습제";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '17' : 
                url = "/product/네브리스-차량용-자석-충전-거치대/122/category/27/display/1/";
                title = "네브리스 차량용 자석 충전 거치대";
                text = "모든 스마트폰 충전 가능한 차량용 자석 충전 거치대";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '18' : 
                url = "/product/그레이-원데이-수세미-엠보싱/128/category/43/display/1/";
                title = "그레이 원데이 수세미 엠보싱";
                text = "엠보싱이 추가되어 거품이 풍성! <br/>부드럽게 닦이는 원데이 수세미";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '19' : 
                url = "/product/리백-re100/135/category/43/display/1/";
                title = "리백 RE100";
                text = "폐페트병 20개를 재활용한 <br />100% 리사이클링 마켓백";
                linkText += url + "?" + leftSum.toFixed(2) + '%?' + topSum.toFixed(2) + '%?' + '<h3>' + title + '</h3>' + text;
            break;
            case '20' : 
                url = "/product/온더꼬끄-퍼즐매트/139/category/43/display/1/";
                title = "온더꼬끄 퍼즐매트";
                text = "마카롱처럼 푹신한 <br />미끌림 없는 욕실매트";
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

document.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        onSubmit();
        copyText();
    }
})