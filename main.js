const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPlus = $('.areaTodo-plus');
const areaText = $('.areaTodo-text');
const listTodo = $('#listTodo');

let list = [];
if (!localStorage.getItem('list')) {
    localStorage.setItem('list', JSON.stringify(list));
} else {
    list = JSON.parse(localStorage.getItem('list'));
}
const app = {
    addTodo: function(note) {
        const listTodoItem = document.createElement('div');
        listTodoItem.classList.add('container', 'listTodo-item');
        listTodoItem.innerHTML = `
            <div class="listTodo-item-name">${note}</div>
            <span class="btn close">&times;</span>
        `;
        listTodo.appendChild(listTodoItem);
        list.push(listTodoItem.outerHTML);
        localStorage.setItem('list', JSON.stringify(list));
        this.delete()
    },
    delete: function() {
        const listTodo2 = $$('.container.listTodo-item');
        let counter = 0;
        listTodo2.forEach(function(item, index) {
            item.onclick = function(e) {
                if (e.target.closest('.close')) {
                    listTodo.removeChild(item);
                    counter++;
                    list.splice(index - counter, 1);
                    localStorage.setItem('list', JSON.stringify(list));
                }
            }
        })
    },
    update: function() {
        const htmls = list.join('')
        listTodo.innerHTML = htmls
    },
    hanleEvent: function() {
        _this = this
        this.update();
        btnPlus.onclick = function (e) {
            const note = areaText.value;
            if (note.trim() != '') {
                _this.addTodo(note);
            }
            areaText.focus();
            areaText.value = '';
        }
        this.delete()
    }
}

app.hanleEvent();

