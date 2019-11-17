function setup() {
    createCanvas(250, 250);
        let r = Math.floor(Math.random(256));
        let g = Math.floor(Math.random(356));
        let b = Math.floor(Math.random(356));
        background(r,g,b);
    
        let dropdown = createSelect();
        dropdown.option('red');
        dropdown.option('blue');
        dropdown.option('gren');
    
        let submit = createButton('submit');
        submit.mousePressed(sendData);
    
        function sendDate() {
            
        }
}