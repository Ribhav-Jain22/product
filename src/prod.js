exports.handler = async (event) => {
    const num1 = event.num1;
    const num2 = event.num2;

    // Ensure the inputs are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid input, please provide two numbers." })
        };
    }

    const sum = num1 + num2;

    return {
        statusCode: 200,
        body: JSON.stringify({ sum: sum })
    };
};
