import React from 'react'
import Buttons from './Buttons'

function TodoItem({id,todoText,todoDate,deleteTodoItems}) {


    return (
        <div>
            <div className="container text-center">

                <div className="row">
                    <div className="col-5 text-truncate">
                        {todoText}
                    </div>
                    <div className="col-3"> {todoDate}</div>
                    <div className="col-2"> <Buttons btnType="danger" btnText="Delete" handler={()=> deleteTodoItems(id)} /></div>
                </div>
            </div>

        </div>
    )
}

export default TodoItem
