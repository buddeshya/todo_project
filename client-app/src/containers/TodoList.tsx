import { useDispatch, useSelector } from "react-redux";
import ListHeader from "../components/ListHeader";
import List from "../components/List";
import { addItem, markItemAsDone, removeItem } from "../store/actions/todo";
import { useState } from "react";
import {RootState} from "../store/reducers";

function TodoList() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>("");

    const todo: any = useSelector((state: RootState) => state.todo);

    const addItemToList = () => {
        if (!title) return;

        dispatch(addItem(title));
        setTitle('');
    };

    const removeItemFromList = (item_id: number) => {
        dispatch(removeItem(item_id));
    };

    const toggleItemDone = (item_id: number) => {
        dispatch(markItemAsDone(item_id));
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg rounded-lg w-[500px]">
                <ListHeader
                    addItemToList={addItemToList}
                    title={title}
                    setTitle={setTitle}
                />
                <List
                    list={todo.todo_list}
                    removeItemFromList={removeItemFromList}
                    toggleItemDone={toggleItemDone}
                />
            </div>
        </div>
    );
}

export default TodoList;