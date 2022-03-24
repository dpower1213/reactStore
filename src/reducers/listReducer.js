const listActions ={
    addToList:"addToList",
    removeFromList:"removeFromList",
    emptyList:"emptyList",
}

function listReducer(list, {type, onebook}){
    switch(type){
        case listActions.addToList:
            return [...list, onebook];
        case listActions.displayCard:
            return [...list, onebook];
        case listActions.removeFromList:
            let newList = list.slice()
            for (let oneBook of newList){
                if(oneBook === oneBook.id){
                    newList.splice(newList.indexOf(oneBook.id),1)
                    return newList
                }
            }
            return newList
            case listActions.removeAllFromCart:
                return list.filter((bookItem)=>onebook.id !== bookItem.id)
        
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