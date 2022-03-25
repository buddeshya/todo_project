//Add three item to To do list

export function addItem(title:string) {
    return {
        type:"ADD_ITEM",
        title
    }
}

export function removeItem(item_id: number){
    return {
        type: "REMOVE_ITEM",
        item_id
    }
}

export function markItemAsDone(item_id: number){
    return {
        type:'MARK_ITEM_DONE',
        item_id
    }
}