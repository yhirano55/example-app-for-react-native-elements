import { registerRootComponent } from 'expo'
import React from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  render () {
    return <HelloWorld />
  }
}

registerRootComponent(App)
