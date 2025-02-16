function Sync ({email , displayName, date_posted, body, onDelete,}) {
  return ( 
    <div className="col-md-8 offset-md-2 border p-3 bg-danger-subtle mt-3">
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <div className="dropdown">
                <button className="btn btn-danger-subtle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Edith</a></li>
                  <li><a className="dropdown-item" href="#" onClick={onDelete}>Delete</a></li>
                </ul>
            </div>

          </div>
          <span className="fs-4 fw-bold me-2 lh-1">{displayName}</span>
            <br/>
          <small className="text-secondary lh-1">{date_posted}</small>
            <p className="mt-3 border bg-white p-3 rounded">{body}</p>
        </div>
    </div>
  )
}

export default Sync