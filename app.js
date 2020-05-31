class Calculator{
    
    constructor(currentOperandText,previousOperandText){
        this.currentOperandText = currentOperandText
        this.previousOperandText = previousOperandText
        this.clear()
    }

    delete(){

    }

    clear(){
        this.operation = undefined
        this.currentOperand = ''
        this.previousOperand = ''
    }

    addNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chosenOperator(operation){
        if(this.currentOperand == "") return
        if(this.previousOperand != ""){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand 
        this.currentOperand = ""
    }

    compute(){

    }
    
    update(){
        this.currentOperandText.innerText = this.currentOperand
        this.previousOperandText.innerText = this.previousOperand
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

operationButtons.forEach( button => {
    button.addEventListener("click",() => {
        calculator.chosenOperator(button.innerHTML)
        calculator.update()
    })
})

equalsButton.addEventListener("click", button => {
    
})