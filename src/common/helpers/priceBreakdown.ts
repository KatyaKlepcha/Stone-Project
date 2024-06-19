export const formatNumber = (price: number)=> {
    // Преобразуем число в строку
    const numStr = price.toString();

    // Находим длину строки
    const len = numStr.length;

    // Разделяем строку на массив цифр
    const digits = numStr.split('');

    // Создаем новый массив с разделением по 3 цифры
    const formattedDigits = [];
    let i = len;
    while (i > 0) {
        const chunk = digits.slice(Math.max(0, i - 3), i).join('');
        formattedDigits.unshift(chunk);
        i -= 3;
    }

    // Убираем ведущие нули
    while (formattedDigits[0] === '0' && formattedDigits.length > 1) {
        formattedDigits.shift();
    }

    // Возвращаем отформатированную строку
    return formattedDigits.join(' ');
}