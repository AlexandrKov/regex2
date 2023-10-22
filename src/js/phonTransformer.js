export default function phonTransformer(tel) {
        const newNumber = tel.replace(/[^+\d]/g, "")
        if(newNumber[0] === "+") {
            return newNumber
        } else {
            if(newNumber.length === 11) {
                return `+7${newNumber.slice(1)}`
            }
        }
        return newNumber;
    }