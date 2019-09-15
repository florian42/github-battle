import React from 'react'
import ReactDOM from 'react-dom' // Is seperate from react since you might want to render it in a different environment, like android or ios
import './index.css'
import Popular from './components/Popular'

// Component (Aspects of a component)
//  State
//  Lifecycle
//  UI

// ES& class
class App extends React.Component {
    render() {
        // Violation of Seperation of Concerns?
        // A. refer to Aspects of a component -> A component is concerned about the ui layer
        // JSX will be converted into js by Babel: React.createElement
        return (
        <div className='container'>
            <Popular />
        </div>
        )
    }
}

ReactDOM.render(
    // 1. Param: React Element,
    <App/>,
    // 2. Param: Where to render the element to
    document.getElementById('app')

)