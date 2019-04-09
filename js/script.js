function Button(text) {
    this.text = text || 'Hello';
}
Button.prototype = {
    create: function () {
        let self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        this.element.addEventListener('click', function () {
            alert(self.text);
        });

//        this.element.addEventListener('click', () => alert(this.text));

        document.body.appendChild(this.element);
    }
}
let btn1 = new Button('hello');
btn1.create();