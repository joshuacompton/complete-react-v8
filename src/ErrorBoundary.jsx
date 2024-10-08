import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // This is only available for classes so this cant be done in function components.
  componentDidCatch(error, info) {
    // Typically logged to TrackJS or NewRelic.
    console.error('ErrorBoundary component caught an error', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.
          <Link to="/">Home</Link>
        </h2>
      )
    }

    // Allow other components to render if no errors
    return this.props.children
  }
}
