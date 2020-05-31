class Calculator{
    
    constructor(currentOperandText,previousOperandText){
        this.currentOperandText = currentOperandText
        this.previousOperandText = previousOperandText
        this.clear()
    }

    delete(){

    }

    clear(){
        this.operatrion = undefined
        this.currentOperand = ''
        this.previousOperand = ''
    }

    addNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chosenOperator(operatrion){

    }

    compute(){

    }
    
    update(){
        this.currentOperandText.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const allclearButton = document.querySelector("[data-all-clear]")
const deleteButton = document.querySelector("[data-delete]")
const previousOperandText = document.querySelector("[data-previous-operand]")
const currentOperandText = document.querySelector("[data-current-operand]")


const calculator = new Calculator(currentOperandText,previousOperandText)

numberButtons.forEach( button => {
    button.addEventListener("click",() => {
        calculator.addNumber(button.innerHTML)
        calculator.update()
    })
})