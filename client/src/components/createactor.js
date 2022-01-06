import React, {Fragment, useState, useEffect} from 'react'

export default function editmovie({movie}) {
    const [movie, setMovie] = useState(movie.id);

    const updateMovie = async e => {
        e.preventDefault();
        try {
            const body = {movie}
            const response = await fetch(`http://localhost:3001/${movie.id}`,{
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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${movie.id}`}>
                Launch demo modal
            </button>
            <div class="modal" id={`id${movie.id}`} tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Movie</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>setMovie(movie.id)}>Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}
