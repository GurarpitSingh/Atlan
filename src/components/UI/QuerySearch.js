import React, {useState} from 'react'
import QueryResult from './QueryResult'
import './QuerySearch.css'



const QuerySearch = () => {
    const [query, setQuery] = useState('')
    const [tempquery, setTempQuery] = useState('')
    const [preQuery, setPreQuery] = useState('')
    const [loading, setLoading] = useState(false)


    var handleQuery = (e) => {
        e.preventDefault();

        setQuery(tempquery)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)


        if(preQuery == '1'){
            setQuery('Predefined Query' + preQuery)
        }
        if(preQuery == '2'){
            setQuery('Predefined Query' + preQuery)
        }

        
    }
  return (
        <div className='w-100'>
            <div className='container w-100'>
                <div className="row mt-5">
                    <div className="col-sm-4 w-100 d-flex justify-content-center">
                        <div className="card" style={{'width': '30rem'}}>
                            <div className="card-header">
                                <h5>Query Search</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <div className='d-flex bg-white rounded-pill' style={{'padding-left': '2vmin'}}>
                                    <i class="fa-solid fa-magnifying-glass pt-2"></i>
                                        <input type="text" className="form-control rounded-pill border-0 shadow-none" onChange={e => setTempQuery(e.target.value)} id="query" placeholder="Enter Query" />
                                        <select name="" id="" className='btn btn-info dropdown-toggle dropdown-toggle-split py-1 rounded-pill' onChange={e => setPreQuery(e.target.value)}>
                                            <option value="">Select Query</option>
                                            <option value="1">Pre. Query 1</option>
                                            <option value="2">Pre. Query 2</option>
                                        </select>
                                        </div>
                                        </div>
                                    {/* <button type="submit" onClick={handleQuery} className="btn btn-outline-success mt-3 rounded-pill">Submit</button> */}
     {
        loading? <button class="btn btn-primary mt-3" type="button" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</button>: <button class="btn btn-primary mt-3" type="button" onClick={handleQuery}>Submit</button>
     }
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <QueryResult value={query} />
            </div>
        </div>
  )
}

export default QuerySearch