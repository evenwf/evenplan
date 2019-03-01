const initState= {
    projects: [
        {id: '1', title: 'help me find Andreas', content: 'jalla1'},
        {id: '2', title: 'help me find Yngve', content: 'jalla2'},
        {id: '3', title: 'help me find Jan Erik', content: 'jalla3'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer