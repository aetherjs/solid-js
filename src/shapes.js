class Rectangle {
    constructor(width, height) {
      this._width = width
      this._height = height
    }

    get width() {
      return this._width
    }

    get height() {
      return this._height
    }
  
    set width(value) {
      this._width = value
    }

    set height(value) {
      this._height = value
    }
  
    getArea() {
      return this._width * this._height
    }
}
  
export class Square extends Rectangle {
    constructor(side_length) {
      super(side_length, side_length)
    }
}
  