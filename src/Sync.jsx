function Sync ({email , displayName, date_posted, body, onDelete,}) {
  return ( 
    <div className="col-md-8 offset-md-2 border p-3 bg-danger-subtle mt-3">
        <div className="card-body">
          <span className="fs-4 fw-bold me-2 lh-1">{displayName}</span>
            <br/>
          <small className="text-secondary lh-1">{date_posted}</small>
            <p className="mt-3 border bg-white p-3 rounded">{body}</p>
            <div className="d-flex justify-content-end">
            <button className="btn btn-outline-success me-2">Edit</button>
            <button onClick={onDelete} className="btn btn-outline-danger">Delete</button>
            </div>
            
        </div>
    </div>
  )
}

export default Sync