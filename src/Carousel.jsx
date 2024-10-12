import { Component } from 'react'

export default class Carousel extends Component {
  state = { active: 0 }

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  }

  handleIndexClick = e => {
    this.setState({ active: +e.target.dataset.index })
  }

  render() {
    const { active } = this.state
    const { images } = this.props

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="flex gap-1 pt-2">
          {images.map((photo, index) => {
            let classes = 'w-1/6'
            if (index === active) {
              classes += ' active'
            }
            return (
              <img
                onClick={this.handleIndexClick}
                data-index={index}
                key={photo}
                src={photo}
                className={classes}
                alt="animal thumbnail"
              />
            )
          })}
        </div>
      </div>
    )
  }
}
