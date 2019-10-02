import React from 'react'
import ReactDOM from 'react-dom' // Is seperate from react since you might want to render it in a different environment, like android or ios
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Component (Aspects of a component)
//  State
//  Lifecycle
//  UI

// ES& class
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }
  render() {
    // Violation of Seperation of Concerns?
    // A. refer to Aspects of a component -> A component is concerned about the ui layer
    // JSX will be converted into js by Babel: React.createElement
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />
              <Route exact path='/' component={Popular} />
              <Route exact path='/battle' component={Battle} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  // 1. Param: React Element,
  <App />,
  // 2. Param: Where to render the element to
  document.getElementById('app')

)