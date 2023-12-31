const message1Options = [
    'my babe',
    'my honey',
    'my sweetheart',
    'my lovely',
    'my dearest',
    'my life',
    'my world',
    'my everything',
    'my sunshine',
    'my darling',
    'my honey bee',
    'my rock',
    'my best friend and love of my life'
];

const message2Options = [
    'you make my heart sing',
    'you\'re always there for me',
    'I can count on you',
    'you keep me steady',
    'sometimes we laugh so hard together, my stomach hurts',
    'I can\'t imagine life without you',
    'we understand each other so deeply',
    'your smile and your laugh make me smile',
    'I love everything about you',
    'you take care of me, and I love taking care of you',
    'you make it so easy to love you',
    'you are beautiful inside and out',
    'you love me so well',
    'it\'s hard to say goodbye in the morning, and I look forward to seeing you again all day',
    'you are one of the kindest people I\'ve ever known',
    'I can\'t stop thinking about you',
    'you\'re my fire and my flood',
    'I love your soul, you mind, and your body',
    'there\'s nothing I\'d rather do than spend the whole day with you',
    'you\'re so caring toward me and everyone else',
    'you\'re so patient and wonderful',
    'you treat me so respectfully',
    'you are loyal and honest to a fault',
    'I love the way you look at me',
    'you\'re my ride or die'
];

const message3Options = [
    'I love you',
    'See you tonight',
    'Don\'t forget about me',
    'I\'ll be thinking about you all day',
    'You\'re simply the best',
    'I\'ll try not to miss you too much',
    'I kind of like you...a lot',
    'I still can\'t believe we found each other, even after all this time',
    'You\'re my forever person, forever',
    'Loving you is the best part of my life',
    'I\'m so happy that you\'re my partner',
    'You\'re the person of my dreams',
    'I love you soooo much',
    'I can\'t wait until we see each other later',
    'I\'ll think of you often today',
    'Wear something nice tonight',
    'You really are my other half',
    'You are the tune to my tuna',
    'xoxoxoxoxo',
    'I love you more than anything',
    'I\'m so grateful for you'    
];

const getMessage = arr => {
    const arrLength = arr.length;
    return arr[Math.floor(Math.random() * arrLength)];
};

const message1 = getMessage(message1Options);
const message2 = getMessage(message2Options);
const message3 = getMessage(message3Options);

console.log(`To ${message1}. I love you because ${message2}. ${message3}.`);

