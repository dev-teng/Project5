function Home() {
  return (
    <div className="container-fluid p-5 m-5">
      <div className="row mb-5" style={{width: "10px"}}>
        <div className="col-md-2">
          <h1 className="text-danger">Soul+Sync</h1>
          <div className="card-body d-grid">
            <span>Username</span>
            <span>teng@test.com</span>
            <button className="btn btn-secondary d-grid mt-3">Logout</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 border p-3 bg-danger-subtle">
          <p>What's on your mind?🤯</p>
          <input type="text" className="form-control" />
          <button className="btn btn-outline-dark mt-3 ps-3 pe-3">Sync</button>
        </div>

        <div className="col-md-8 offset-md-2 border p-3 bg-danger-subtle mt-3">
          <div className="card-body">
            <span className="fs-4 fw-bold me-2">Vincent Teng</span>
            <span className="badge text-bg-dark">1hr</span>
            <p className="mt-3 border bg-white p-3 rounded">One day, I will also become a developer.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home