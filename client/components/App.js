class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: initialPhotos, // from data/initialPhotos.js
      currentPhoto: initialPhotos[0]
    }
  }

  setCurrentPhoto(photo) {
    this.setState({ currentPhoto: photo });
  }

  updateRating(newRating) {
    this.state.currentPhoto.rating = newRating;
    this.setState({ currentPhoto: this.state.currentPhoto });
  }

  render() {
    return (
      <div>
        <p>Photo Album</p>
        <Selector photos={this.state.photos} setCurrentPhoto={this.setCurrentPhoto.bind(this)} />
        <ViewPort photo={this.state.currentPhoto} updateRating={this.updateRating.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));