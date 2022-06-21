import React, {useEffect, useState} from 'react'

const Loader = (props) => {
    const [loading, setLoading] = useState({'width': '3rem', 'height': '3rem'})
    setTimeout(() => {
        setLoading({'display': 'none'})
        }, 2000)
   

  return (
    <div>
        <div class="spinner-border" style={loading} role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>
  )
}

export default Loader