import React from 'react'

const Contact = (props) => {
    console.log('QS ',props.location.search);
    const qs = props.location.search;
    const obj = new URLSearchParams(qs);
    let values = "";
    for(let param of obj.entries()){
        values += param[0] +" is "+param[1];
    }

    return (
        <div>
              <h1>Contact Component {values} </h1>
              <form>
                  <input type='text' placeholder='Type Name Here'/>
                  <br/>
                  <input type='text' placeholder='Type Name Here'/>
                  <br/>
                  <input type='text' placeholder='Type Name Here'/>
              </form>
        </div>
    )
}

export default Contact;
