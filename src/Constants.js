'use strict';

// Expose as global variable for use in client-side JS
var CONSTANTS = {
    meta: {
        company: {
            title: 'See Double Press',
            description: 'A newly founded independent press dedicated to innovative interfusing of text and image.',
            image: '/img/SeeDouble.png',
            image_small: '/img/SeeDouble_Small.png',
            username: '@SeeDoublePress',
            url: 'http://SeeDouble.Press'
        }
    },
    products: {
        'incarnation': {
            type: 'book',
            format: 'hardcover',
            description: [
                'An Incarnation of the Now is a never-before published erasure book by Mary Ruefle, who is one of the greatest living American poets and a master of the erasure-book form.  Mary enjoys applying white-out, collage images and found materials to old texts so as to turn them into new wonders.'
            ],
            dimensions: 'Dimensions: 108 pages, 5.75 x 8.25 x 0.75 inches',
            releaseDate: false,
            shipping: 'Ships via USPS media mail. Arrives within 3 weeks.',
            edition: 1,
            name: 'An Incarnation of the Now',
            author: 'Mary Ruefle',
            images: [
                '/img/incarnation_title.jpg',
                '/img/incarnation_cover.jpg',
                '/img/incarnation_p10.jpg',
                '/img/incarnation_p26.jpg',
                '/img/incarnation_p34.jpg',
                '/img/incarnation_p44.jpg',
                '/img/incarnation_p6.jpg',
            ],
            price: 5000
        },
        'incarnation_limited': {
            type: 'book',
            format: 'hardcover',
            description: [
                'A limited edition of 30 copies of An Incarnation of the Now that includes an original work of art and text by Mary Ruefle that is signed by her.',
                'An Incarnation of the Now is a never-before published erasure book by Mary Ruefle, who is one of the greatest living American poets and a master of the erasure-book form.  Mary enjoys applying white-out, collage images and found materials to old texts so as to turn them into new wonders.'
            ],
            dimensions: 'Dimensions: 108 pages, 5.75 x 8.25 x 0.75 inches',
            releaseDate: false,
            shipping: 'Ships via USPS media mail. Arrives within 3 weeks.',
            edition: 1,
            name: 'An Incarnation of the Now [Limited]',
            author: 'Mary Ruefle',
            images: [
                '/img/incarnation_title.jpg',
                '/img/incarnation_cover.jpg',
                '/img/incarnation_p10.jpg',
                '/img/incarnation_p26.jpg',
                '/img/incarnation_p34.jpg',
                '/img/incarnation_p44.jpg',
                '/img/incarnation_p6.jpg',
                '/img/incarnation_signed.jpg',
            ],
            price: 15000
        },
        'incarnation_ebook': {
            type: 'book',
            format: 'ebook',
            description: ['An Incarnation of the Now is a never-before published erasure book by Mary Ruefle, who is one of the greatest living American poets and a master of the erasure-book form.  Mary enjoys applying white-out, collage images and found materials to old texts so as to turn them into new wonders.'],
            releaseDate: 'in June',
            shipping: 'Download',
            edition: 1,
            name: 'An Incarnation of the Now [ebook]',
            author: 'Mary Ruefle',
            images: [
                '/img/incarnation_title.jpg',
                '/img/incarnation_cover.jpg',
                '/img/incarnation_p10.jpg',
                '/img/incarnation_p26.jpg',
                '/img/incarnation_p34.jpg',
                '/img/incarnation_p44.jpg',
                '/img/incarnation_p6.jpg',
            ],
            price: 1000
        }

    },
    team: {
        larry: {
            name: 'Lawrence Sutin',
            title: 'Creative Editor<br>and Shut-In',
            bio: 'Scrounger-lounger type with his own tastes and ideas. No longer able to schmooze.'
        },
        mab: {
            name: 'Mab Nulty',
            title: 'Director<br>and Queen of Connaght',
            bio: 'Without her vision, planning, and commitment, See Double Press would not exist. She is a lovely soul.'
        },
        sarah: {
            name: 'Sarah Sutin',
            title: 'Book Designer<br>and River Otter',
            bio: 'Sarah designs interior spaces as well as books. Her aesthetic—beauty and function in cozy harmony—extends to the See Double packaging design for shipping.'
        },
        ansel: {
            name: 'Ansel Santosa',
            title: 'Wondrous Website Creator<br>and Virtual Wizard',
            bio: 'Brilliant and adorable. The creative labor he put into this website has been essential to our press.'
        },
        brennan: {
            name: 'Brennan Vance',
            title: 'Website Cinematographer<br>and Ardent Tarkovski-ite',
            bio: 'Brennan is an award-winning independent filmmaker who has also worked as a cinematographer on public television. You wouldn’t think so, but he likes hockey.'
        },
        ceallaigh: {
            name: 'Ceallaigh Anderson',
            title: 'Nonprofit Consultant',
            bio: 'Salt of the earth, pure of heart, a woman whose entrepreneurial skills are directed to the good of all.'
        },
        murphy: {
            name: 'Murphy',
            title: 'See Double Hero',
            bio: 'Cancer survivor. Bodhisattva. Best kisser ever.'
        }
    }
};

// Expose as module for use in build-step Jade rendering
if (typeof module !== 'undefined') {
    module.exports = CONSTANTS;
}

// Expose as module for use in Angular run-time environment
if (typeof angular !== 'undefined') {
    angular.module('seedouble').constant('Constants', CONSTANTS);
}
