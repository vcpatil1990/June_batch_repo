class square{

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setdimention(width, height) {

        this.width = width;
        this.height = height;
    }
    getarea() {
        return this.width * this.height;
    }
}
const rect = new square(50, 20);
//rect.setdimention(30, 20);
console.log('area', rect.getarea())
