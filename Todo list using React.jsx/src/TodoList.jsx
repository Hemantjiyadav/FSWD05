import React, { useState } from 'react'
import Card from './Card';

export const TodoList = () => {
    const [title, setTitle] = useState("");  //usestate use for display update
    const [desc, setDesc] = useState("");
    const [data, setdata] = useState([]);


    const submit = (e) => {
        e.preventDefault();  // here dont automatic thatwhy we use preventdefault

        setdata([...data, { kil: title, har: desc }]);  //spread operater...
        setTitle("");
        setDesc("");

    }
    const deleteclick = (id) => {
        console.log(id)
        const lab = [...data]
        lab.splice(id, 1)
        setdata([...lab])
    };
    return (
        <>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-6 ">
                        <div className='card p-3 text-dark'>
                            <h3>Add a Todo</h3>
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Todo Title</label>
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Todo Description</label>
                                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                                </div>
                                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container'>
                <div className="row-12">
                    <div className="card-parent">
                        {data.map((Hemant, key) => {
                            console.log(Hemant.kil)
                            console.log(Hemant.har)
                            return (
                                <Card key={key} title={Hemant.kil} desc={Hemant.har} id={key} onDelete={deleteclick} />
                            )
                        })}
                    </div>
                </div>
                {/* d-flex flex-wrap gap-2 */}

            </div>
            <hr />
        </>
    )
}


export default TodoList