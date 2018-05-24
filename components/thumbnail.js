
let ThumbnailGrid = React.createClass({
  createThumbnailGrid: function (thumbnailList) {
    return thumbnailList.map((thumbs) => {
      return (
        <Thumbnail index={thumbs.index} gallery={thumbs.gallery}  image={thumbs.image} />
      );
  })

  },
  render: function () {
    return (
      <div className="thumbnailGrid">
        {this.createThumbnailGrid(thumbnailList)}
      </div>
    );
  }
});

let Thumbnail = function statelessFunctionComponentClass(props) {
  let source = '/images/' + props.gallery + '/' + props.image;
  let href = '?page=artwork&index=' + props.index + '&gallery=' + props.gallery;
  var style = {
    backgroundImage: 'url(' + source + ')',
  };
  return <a href={href} className="image-thumbnail" style={style}></a>;
};