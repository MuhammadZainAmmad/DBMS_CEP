const INITAIL_STATE = {
    user: {},
    allUsers: [],
    hotelData: [
        {
            title:'Marriott',
            img: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rooms:'10',
            price:'20000'
        },
        {
            title:'Hotel Tonight',
            img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            rooms:'5',
            price:'3000'
        },
        {
            title:'Hilton',
            img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            rooms:'8',
            price:'9000'
        },
        {
            title:'Expedia',
            img: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            rooms:'9',
            price:'10000'
        },
        {
            title:'Ritz',
            img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
            rooms:'7',
            price:'5000'
        },
        {
            title:'Marriott',
            img: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
            rooms:'4',
            price:'2000'
        },
        {
            title:'Hotel Tonight',
            img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            rooms:'4',
            price:'2000'
        },
        {
            title:'Hilton',
            img: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
            rooms:'4',
            price:'2000'
        }
    ]
}

export default (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case "GETUSER":
            return ({
                ...state,
                user: action.user
            })
        case "GETALLUSERS":
            return ({
                ...state,
                allUsers: action.allUsers
            })

        default:
            return state
    }
}