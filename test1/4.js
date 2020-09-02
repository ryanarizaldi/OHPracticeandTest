function drawSymbolicColsBox(num) {
    let number = 1;

    for (let i = 0; i < num; i++) {
        let final = "";
        for (let j = 0; j < num; j++) {
            if (number % 3 === 0) {
                final = final + "* ";
            } else if (number % 2 === 0) {
                final = final + "$ ";
            } else {
                final = final + "@ ";
            }
            number++;
        }
        console.log(final);
    }
}

drawSymbolicColsBox(3);
drawSymbolicColsBox(5);
// drawSymbolicColsBox(12);