* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif
}

#main {
    padding: 12px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.container {
    width: 95%;
    border: 0.1px solid #333;
    border-radius: 15px;
    display: flex;
    overflow: hidden;
    margin: 0 auto;
}

.areaTodo-text {
    flex: 7;
    resize: none;
    padding: 8px;
    letter-spacing: 1px;
    outline: none;
    border: none;
    font-size: 16px;
}

.btn {
    padding: 2px 25px;
    transform: translateX(0px);
    font-size: 30px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn.areaTodo-plus {
    font-size: 35px;
}

.btn:hover {
    background-color: red;
}

.btn.areaTodo-plus:hover {
    background-color: rgb(9, 185, 9);
    cursor: pointer;
}

.listTodo-item {
    width: 95%;
    min-height: 45px;
    display: flex;
}

.listTodo-item-name {
    flex: 7;
    align-self: center;
    padding-left: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.close {
    cursor: pointer;
}

.areaTodo + #listTodo {
    margin-top: 80px;
}

.listTodo-item + .listTodo-item {
    margin-top: 20px;
}

@media (min-width: 740px) {
    #main {
        flex-direction: row;
        margin-top: 50px;
    }

    .areaTodo {
        max-height: 60px;
        margin-right: 45px;
        width: 45%;
    }

    #listTodo {
        flex: 1;
    }

    .areaTodo + #listTodo {
        margin-top: 0px;
    }
}
