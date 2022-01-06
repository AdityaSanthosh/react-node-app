import React, {Fragment, useState, useEffect} from 'react'

export default function editactor({actor}) {
    const [actor, setActor] = useState(actor.id);

    const updateactor = async e => {
        e.preventDefault();
        try {
            const body = {actor}
            const response = await fetch(`http://localhost:3001/${actor.id}`,{
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            })
        }
        catch(err) {
            console.log(err);
        }
        window.location = '/';
    }
    return (
        <Fragment>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${actor.id}`}>
                Launch demo modal
            </button>
            <div class="modal" id={`id${actor.id}`} tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit actor</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>setActor(actor.id)}>Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}
