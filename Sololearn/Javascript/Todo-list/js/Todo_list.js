// 버튼 클릭시
// 카드플립
var first = document.querySelector('.flip-card__front')
var all = document.querySelector('.flip-card')
var close = document.querySelector('.close_button')
var ul = document.querySelector('ul')

// close.onclick = close

// all.onmouseover = function () {
//  first.style.cssText = 'transform: translateX(40%)';
//  first.style.cssText = 'transition: all 1s';
// }

first.onclick = function() {

    first.parentNode.style.cssText = 'transform: rotateY(180deg) translateX(100%)';

    close.onclick = function() {
        first.parentNode.style.cssText = '';
    }

}


var button = document.querySelector('.Day_Memo_button')
// console.log(button)
// 인풋안의 텍스트 값이
var input = document.querySelector('#Day_Memo')
// console.log(input)
// list에 추가 된다.
var Day_list = document.querySelector('.Day_list')

var input_value = input.value

// input.hasChildNodes()
// console.log(input.hasChildNodes())

button.onclick = CreateListItem

// input_value.onkeyup = CreateListItem_another

// remove함수 생성
var removeItem = function () {
  var item = this.parentNode;
  item.parentNode.removeChild(item);
}
// var body = document.querySelector('body');
var max_list_count = (ul.children.length = 6)

// 키드보 엔터, 스페이스 입력시 리스트를 추가하는 함수
input.onkeydown = function pressKeyEvent(evt) {
    evt = evt || window.event;
    // console.log('onkeyup');
    if (evt.keyCode === 13 || evt.keyCode === 32) {
        var add_list = document.createElement('li')
        var list_item = document.createTextNode(input.value)
        var delete_button = document.createElement('button')
        var delete_button_text = document.createTextNode('X')
        delete_button.appendChild(delete_button_text);
        add_list.setAttribute('class', 'todo')
        delete_button.setAttribute('class', 'delete_button')
        delete_button.style.cssText = 'border-box: 1px solid black; padding: 5px';
        add_list.appendChild(list_item)
        add_list.appendChild(delete_button)
        Day_list.appendChild(add_list)
        console.log(Day_list)
        input.value = '';
        input.focus();

        delete_button.onclick = removeItem;
    }


    // var count = min_list_count

    if (ul.children.length > max_list_count) {
        // ul.setAttribute('disabled', true);

        this.onkeydown = null;
    };
    // console.log('input_value: ', input_value)
    // console.log(pressKeyEvent);
}
// 버튼 클릭시 리스트를 추가하는 함수
function CreateListItem() {
    var add_list = document.createElement('li')
    var list_item = document.createTextNode(input.value)
    var delete_button = document.createElement('button')
    var delete_button_text = document.createTextNode('X')
    delete_button.appendChild(delete_button_text);
    add_list.setAttribute('class', 'todo')
    delete_button.setAttribute('class', 'delete_button')
    delete_button.style.cssText = 'border-box: 1px solid black; padding: 5px';
    add_list.appendChild(list_item)
    add_list.appendChild(delete_button)
    Day_list.appendChild(add_list)
    console.log(Day_list)
    input.value = '';
    input.focus();

    var max_list_count = (ul.children.length = 6)

    if (ul.children.length > max_list_count) {
        // ul.setAttribute('disabled', true);

        button.onclick = null;
    };

    delete_button.onclick =  removeItem;
};

// 제거함수
