var exploreData = {
    'section_highlights': {
        name: 'Highlights'
    },
    'section_categories': {
        name: 'Categories'
    },

    // Highlights

    'highlights_staffpicks': {
        name: 'Staff Picks',
        query: {
            flag: 'staffpicked'
        }
    },
    'highlights_popular': {
        name: 'Popular',
        query: {
            date: 7,
            sort_by: '-viewCount'
        }
    },
    'highlights_recent': {
        name: 'Recent',
        query: {
            sort_by: '-createdAt'
        }
    },
    'highlights_downloadable': {
        name: 'Downloadable',
        query: {
            features: 'downloadable'
        }
    },
    'highlights_animated': {
        name: 'Animated',
        query: {
            features: 'animated'
        }
    },
    'highlights_brands': {
        name: 'Brands',
        query: {
            flag: 'brands'
        }
    },

    // Categories
    'category_71260eecdab14a92859a1630e69b5e59' : {
        name: '3D Scans',
        query: {
            categories: '71260eecdab14a92859a1630e69b5e59'
        }
    },
    'category_7c8e6d2ef6e34acfafb4dfdd2eac8e9a' : {
        name: 'Architecture',
        query: {
            categories: '7c8e6d2ef6e34acfafb4dfdd2eac8e9a'
        }
    },
    'category_7b69e7e004ab4e468fa11350a9e9dbb4' : {
        name: 'Animal',
        query: {
            categories: '7b69e7e004ab4e468fa11350a9e9dbb4'
        }
    },
    'category_c92452986e70422ca2c6552835a89882' : {
        name: 'Characters',
        query: {
            categories: 'c92452986e70422ca2c6552835a89882'
        }
    },
    'category_232cf6b0e479418fb9845165ea855ff7' : {
        name: 'Games',
        query: {
            categories: '232cf6b0e479418fb9845165ea855ff7'
        }
    },
    'category_528c1d6ede944cf685b2b36eb595f26d' : {
        name: 'Miscellaneous',
        query: {
            categories: '528c1d6ede944cf685b2b36eb595f26d'
        }
    },
    'category_dccdb5378e924075aaee17288b6b2df1' : {
        name: 'Objects',
        query: {
            categories: 'dccdb5378e924075aaee17288b6b2df1'
        }
    },
    'category_277778eda2ec467cb6e028b85682ffd3' : {
        name: 'Printable',
        query: {
            categories: '277778eda2ec467cb6e028b85682ffd3'
        }
    },
    'category_04b6d4d0e43c403f8f226c374b5381ea' : {
        name: 'Scenes',
        query: {
            categories: '04b6d4d0e43c403f8f226c374b5381ea'
        }
    },
    'category_e4a6ff21ea0042ff9f0f64db2d0adaec' : {
        name: 'Science',
        query: {
            categories: 'e4a6ff21ea0042ff9f0f64db2d0adaec'
        }
    },
    'category_dbe6cb768f2d4b31ba1611d3229d7431' : {
        name: 'Vegetal',
        query: {
            categories: 'dbe6cb768f2d4b31ba1611d3229d7431'
        }
    },
    'category_cf442dbc806b432d9e13f4dc3b1df0c0' : {
        name: 'Vehicles',
        query: {
            categories: 'cf442dbc806b432d9e13f4dc3b1df0c0'
        }
    },
};

var exploreSections = [
    'section_highlights',
    'section_categories'
];

var exploreRows = [

    [
        // 'highlights_staffpicks',
        'highlights_popular',
        'highlights_animated',
        // 'highlights_downloadable',
        'highlights_brands',
        'highlights_recent',
    ],

    [
        'category_71260eecdab14a92859a1630e69b5e59',
        'category_7c8e6d2ef6e34acfafb4dfdd2eac8e9a',
        'category_7b69e7e004ab4e468fa11350a9e9dbb4',
        'category_c92452986e70422ca2c6552835a89882',
        'category_232cf6b0e479418fb9845165ea855ff7',
        'category_528c1d6ede944cf685b2b36eb595f26d',
        'category_dccdb5378e924075aaee17288b6b2df1',
        'category_277778eda2ec467cb6e028b85682ffd3',
        'category_04b6d4d0e43c403f8f226c374b5381ea',
        'category_e4a6ff21ea0042ff9f0f64db2d0adaec',
        'category_dbe6cb768f2d4b31ba1611d3229d7431',
        'category_cf442dbc806b432d9e13f4dc3b1df0c0',
    ]
];

module.exports = {
    data: exploreData,
    sections: exploreSections,
    rows: exploreRows
};
