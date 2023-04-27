import React from 'react'

const Signup = () => {
  return (
    <main className="flex-row justify-center mb-8">
    <div className="col-8 col-lg-4" >
       <div className="card">
          <h4 className="card-header bg-blue text-light p-2">Signup</h4>
            <div className="card-body">
              <form>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="username"
                  />
                  <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  />
                  <input
                  className="form-input"
                  placeholder="*******"
                  name="password"
                  type="password"
                  />

                  <button
                  className="btn btn-block btn-primary"
                 style={{ cursor: 'pointer' }}
                 type="submit">Submit</button>
              </form>

            </div>
       </div>
    </div>

 </main>
  )
}

export default Signup