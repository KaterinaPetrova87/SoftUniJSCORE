function sum() {
    let num1, num2, result;
    return {
        init: function (selector1, selector2, resultSelector) {
            num1 = $(selector1);
            num2 = $(selector2);
            result = $(resultSelector);
        },
        add: function () {
            result.val(Number(num1.val()) + Number(num2.val()));
        },
        subtract: function () {
            result.val(Number(num1.val()) - Number(num2.val()));
        }
    }
}
