import React from 'react'

const About = (props) => {
    let {name, job} = props.match.params;
    return (
        <div>
              <h1>About Component {name} {job}</h1>
        </div>
    )
}

export default About;
