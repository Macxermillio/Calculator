class Calculator{
    
    constructor(currentOperandText,previousOperandText){
        this.currentOperandText = currentOperandText
        this.previousOperandText = previousOperandText
        this.clear()
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0 , -1)
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
        let computation
        let prev = parseFloat(this.previousOperand)
        let curr = parseFloat(this.currentOperand)
        if(isNaN(curr) || isNaN(prev)) return
        switch(this.operation){
            case "+":
                computation = prev + curr
                break
            case "-":
                computation = prev - curr
                break
            case "*":
                computation = prev * curr
                break
            case "/":
                computation = prev / curr
                break
            default: 
            return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""
    }
    getNumberDisplay(number){
        const stringNumber = number.toString()
        const digits = parseFloat(stringNumber.split(".")[0])
        const decimal = stringNumber.split(".")[1]
        let intDisplay
        if(isNaN(digits)){
            intDisplay= ""
        }else{
            intDisplay = digits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimal != null){
           return `${intDisplay}.${decimal}` 
        } else {
            return `${intDisplay}`
        }
    }
    update(){
        this.currentOperandText.innerText = this.getNumberDisplay(this.currentOperand)
        if(this.operation != null){
           this.previousOperandText.innerText = `${this.getNumberDisplay(this.previousOperand)} ${this.operation}`

        } else {
            this.previousOperand.innerText = ""
        }
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
    calculator.compute()
    calculator.update()
})

allclearButton.addEventListener("click", button => {
    calculator.clear()
    calculator.update()
    
})

deleteButton.addEventListener("click", button => {
    calculator.delete()
    calculator.update()
    
})