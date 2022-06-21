import React, {useState, useEffect} from 'react'
import './QueryResult.css'
import Loader from './Loader'

const QueryResult = (props) => {
  const [result, setResult] = useState('')
  const [tempquery, setTempQuery] = useState(true)


  
  useEffect(() => {
    
    setResult('Loading...')
    setTimeout(() => {
      setResult('Results for: ' +  props.value)
    }, 2000)
  }, [props.value])
  

  if(props.value === '') {
    return (
    <div className='w-100'>

        <div className="w-100 bg-results py-5 px-5">
        <p className=' text-dark'>Search the Query to get Results</p>
          
        </div>

    </div>
  )
  }
  else if(props.value === 'Predefined Query1'){
    return (
    
      <div className='w-100'>
          <div className="w-100 bg-results py-5 px-5">
          <p className='query-line text-dark'>The Query Results for <span className='fw-bold'>{props.value}</span> is:</p>
            <div className="d-flex justify-content-center">
            <table style={{'border': 'solid', 'width': '500px'}}> 
                <tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr>  
                <tr><td>Gurarpit</td><td>Singh</td><td>60</td></tr>  
                <tr><td>Kunaal</td><td>Sharma</td><td>80</td></tr>  
                <tr><td>Srishti</td><td>Negi</td><td>82</td></tr>  
                <tr><td>Chetna</td><td>Singh</td><td>72</td></tr>  
                </table>  
            </div>
          </div>
  
      </div>
    )

  }
  else if(props.value === 'Predefined Query2'){
    return (
    
      <div className='w-100'>
          <div className="w-100 bg-results py-5 px-5">
          <p className='query-line text-dark'>The Query Results for <span className='fw-bold'>{props.value}</span> is:</p>
            <div className="d-flex justify-content-center">
            <table style={{'border': 'solid', 'width': '500px'}}> 
                <tr><th>Index</th><th>Grocery</th><th>Price</th></tr>  
                <tr><td>0</td><td>Oats</td><td>60</td></tr>  
                <tr><td>1</td><td>Rice</td><td>80</td></tr>  
                <tr><td>2</td><td>Hair Spray</td><td>82</td></tr>  
                <tr><td>3</td><td>Mop</td><td>72</td></tr>  
                </table>  
            </div>
          </div>
  
      </div>
    )

  }
  else {
  return (
    
    <div className='w-100'>
        <div className="w-100 bg-results py-5 px-5">
        <p className='query-line text-dark'>The Query Results for <span className='fw-bold'>{props.value}</span> is:</p>
          <div className="d-flex justify-content-center">
        <p>{result}</p>
          </div>
        </div>

    </div>
  )
}
}

export default QueryResult