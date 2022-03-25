export interface Todo {
    id: number;
    title: string;
    is_done: boolean;
}

interface TodoReducerInterface {
    todo_list: Todo[]
}

const INITIAL_STATE: TodoReducerInterface = {
    todo_list: []
}

const todoReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                todo_list: [
                    ...state.todo_list,
                    {
                        id: Math.floor(Math.random() * 1000000) + 1,
                        title: action.title,
                        is_done: false
                    }
                ]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                todo_list: state.todo_list.filter((el: Todo) => el.id !== action.item_id)
            }
        case "MARK_ITEM_DONE":
            const doneItemIndex: number = state.todo_list.findIndex((item: any) => item.id === action.item_id);

            if (doneItemIndex < 0) {
                return state;
            }

            return {
                ...state,
                todo_list: [
                    ...state.todo_list.slice(0, doneItemIndex),
                    {
                        ...state.todo_list[doneItemIndex],
                        is_done: !state.todo_list[doneItemIndex].is_done
                    },
                    ...state.todo_list.slice(doneItemIndex + 1),
                ]
            }
        default:
            return state;
    }
};

export default todoReducer;