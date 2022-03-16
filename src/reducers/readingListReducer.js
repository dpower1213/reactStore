const listActions ={
    addToList:"addToList",
    removeFromList:"removeFromList",
    emptyList:"emptyList",
}

function listReducer(list, {type, book}){
    switch(type){
        case listActions.addToList:
            return [...list, book];
        case listActions.removeFromList:
            let newList = list.slice()
            for (let listBook of newList){
                if(listBook.id === book.id){
                    newList.splice(newList.indexOf(list),1)
                    return newList
                }
            }
            return newList
        case listActions.emptyList:
            return []
        default:
            throw new Error('I am teaPot!')
    }
}

export {
    listReducer,
    listActions
}