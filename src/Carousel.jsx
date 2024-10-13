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
      <div className="flex flex-col lg:flex-row gap-8">
        <img className="" src={images[active]} alt="animal hero" />
        <div className="flex gap-1 pt-2 flex-wrap  gap-8">
          {images.map((photo, index) => {
            let classes = 'w-28 h-28 rounded-full border-2 border-black'
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
