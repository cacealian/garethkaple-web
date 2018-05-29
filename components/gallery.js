let ImageGrid = React.createClass({
  createImageGrid: function () {
    return this.props.gallery .map((imagesthumbs, index) => {
      return (
        <div className="image-small-outer">
          <ImageSmall gallery={imagesthumbs.gallery}  image={imagesthumbs.image} index={index}/>
        </div>
      );
    })
  },
  render: function () {
    return (
      <div id="gallery-grid">
        {this.createImageGrid()}
      </div>
    );
  }
});

let ImageSmall = function statelessFunctionComponentClass(props) {
  let image = '/images/' + props.gallery + '/' + props.image;
  let href = '?page=artwork&gallery=' + props.gallery + '&index=' + props.index;
  let bghref = '/images/' + props.gallery + '/' + props.image; 
  let style = {
    backgroundImage: 'url(' + bghref + ')',
  };

  return <a href={href} className="image-small-box" style={style}></a>;
};

let Image = function statelessFunctionComponentClass(props) {
  let image = '/images/' + props.gallery + '/' + props.image;
  let href = '/images/' + props.gallery + '/' + props.image;
  let style = {
    backgroundImage: 'url(' + href + ')',
  };
  let title = props.title;
return  <a href={href} className="gallery-imageBox" style={style} target="_blank"></a>;
};

let Artwork = React.createClass({
  getImage: function(index) {
    switch(gallery) {
      case 'paintings':
          return galleries[0][index].image;
        case 'drawings':
          return galleries[1][index].image;
        case 'tomes':
          return galleries[2][index].image;
        case 'illustration':
          return galleries[3][index].image;
        case 'photography':
          return galleries[4][index].image;
      default:
          return drawings[index].image;
    }
  },
  getPageNumber: function(index) {
    switch(gallery) {
      case 'paintings':
          return galleries[0][index].pageNumber;
        case 'drawings':
          return galleries[1][index].pageNumber;
        case 'tomes':
          return galleries[2][index].pageNumber;
        case 'illustration':
          return galleries[3][index].pageNumber;
        case 'photography':
          return galleries[4][index].pageNumber;
      default:
          return drawings[index].pageNumber;
    }
  },
  render: function () {
    return (
        <div id="image">
          <Image image={this.getImage(this.props.index)} gallery={this.props.gallery}/>
          <div className="page-number">{this.getPageNumber(this.props.index)}</div>
        </div>
    )
  }
});

let GalleryTitle = React.createClass({
  getTitle: function(index) {
    switch(index) {
      case 'paintings':
          return "1982-1995. Varying sizes and media";
        case 'drawings':
          return "1982-1995. All works approx 18” x 24";
        case 'tomes':
          return "1982-1995. Varying sizes and media";
        case 'illustration':
          return "1982-1995. Varying sizes and media";
        case 'photography':
          return "1982-1995. Varying sizes and media";
      default:
          return "test";
    }
  },
  render: function () {
    return (
      <div id="artwork-title">
        {this.getTitle(this.props.gallery)}
      </div>
    );
  }
});