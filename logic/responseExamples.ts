let prevResponse = [
    {
        extra:{offerId:'1111'},
        price:{USD:120}
    },
    {
        extra:{offerId:'2222'},
        price:{USD:130}
    },
    {
        extra:{offerId:'3333'},
        price:{USD:135}
    },
    {
        extra:{offerId:'4444'},
        price:{USD:170}
    },
]


let currentResponse = [
    {
        extra:{offerId:'1111'},
        price:{USD:120}
    },
    {
        extra:{offerId:'2222'},
        price:{USD:130}
    },
    {
        extra:{offerId:'334'},   //other ID
        price:{USD:135}
    },
    {
        extra:{offerId:'4444'},     //other price
        price:{USD:1800}
    },
]

export {prevResponse, currentResponse}