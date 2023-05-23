import React, { Component } from "react"
import { store } from '../store'
import { Consumer } from "./provider"
export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhance(WraperComponent) {
    return class extends Component {
      constructor(props) {
        super(props)
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({ storeState: mapStateToProps(store.getState()) })
        })
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      render() {
        return <Consumer>
          {context=>{
            return <WraperComponent
            {...this.props}
            {...mapStateToProps(context.getState())}
            {...mapDispatchToProps(context.dispatch)}
          ></WraperComponent>
          }}
          
        </Consumer>
      }
    }
  }
}