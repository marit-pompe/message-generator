const sign = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Sun', 'Moon'];
const quote = [
    `"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer`,
    `"The best way to predict the future is to create it." - Peter Drucker"`,
    `"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll`,
    `"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." - Buddha`,
    `"Believe you can and you're halfway there." - Theodore Roosevelt`,
    `"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." - Charles Darwin`,
    `"Peace comes from within. Do not seek it without." - Buddha`,
    `"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt`,
    `"The journey of a thousand miles begins with one step." - Lao Tzu`,
    `"Don’t watch the clock; do what it does. Keep going." - Sam Levenson`
];
const prediction = [
    `Today, you'll find new energy to tackle challenges that have been holding you back—just make sure to pace yourself to avoid burnout.`, 
    `Financial stability is within reach, but only if you stay disciplined and resist the urge to make impulsive purchases.`,
    `A surprise conversation today may lead to exciting new opportunities, so stay open-minded and listen carefully.`,
    `Your emotional intuition will guide you in making important decisions today—trust your gut, and you'll navigate through uncertainty.`,
    `This is your moment to shine and take center stage; embrace your confidence and inspire those around you with your vision.`,
    `Attention to detail will be your greatest strength today; use it to organize and streamline areas of your life that feel chaotic.`,
    `Balance is key today — try to maintain harmony between your personal needs and the demands of others to avoid unnecessary conflict.`,
    `Something you've kept hidden may come to light today; be prepared to confront the truth and use it as an opportunity for growth.`,
    `Adventure is calling, and now is the time to explore new horizons — whether that's through travel or learning something new.`,
    `Your hard work is finally paying off, but remember to take a moment to celebrate your achievements before diving into the next project.`
    ];

const getRandomMessage = () => {
    const randomIndexSign = Math.floor(Math.random() * sign.length);
    const randomIndexQuote = Math.floor(Math.random() * quote.length);
    const randomIndexPrediction = Math.floor(Math.random() * prediction.length);
    return `Your Horoscope\nYour sign is: ${sign[randomIndexSign]}\nQuote: ${quote[randomIndexQuote]}\nPrediction: ${prediction[randomIndexPrediction]};`
}


console.log(getRandomMessage());