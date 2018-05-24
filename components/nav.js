let HomeNav = function statelessFunctionComponentClass(props) {
  return (
    <nav id="homeNav">
      <a href="/"><h1>Gareth Kaple</h1></a>
      <MainLinks />
    </nav>
    );
};

let PageNav = function statelessFunctionComponentClass(props) {
  return (
    <nav id="pageNav">
      <h1 className="title"><a href="/">Gareth Kaple</a></h1>
      <MainLinks gallery={props.gallery}/>
    </nav>
    );
};

let MainLinks = React.createClass({
  renderSwitch(param) {
    switch(param) {
      case 'paintings':
        return (
          <div>
            <a href='/?page=paintings' className="page-link-up">Paintings</a>
            <a href='/?page=drawings' className="page-link">Drawings</a>
            <a href='/?page=tomes' className="page-link">Tomes</a>
            <a href='/?page=photography' className="page-link">Photography</a>
            <a href='' className="page-link">Music</a>
            <a href='/?page=about' className="page-link">About</a> 
          </div>     
        );
        case 'drawings':
        return (
          <div>
            <a href='/?page=paintings' className="page-link">Paintings</a>
            <a href='/?page=drawings' className="page-link-up">Drawings</a>
            <a href='/?page=tomes' className="page-link">Tomes</a>
            <a href='/?page=photography' className="page-link">Photography</a>
            <a href='' className="page-link">Music</a>
            <a href='/?page=about' className="page-link">About</a> 
          </div>      
        );
        case 'tomes':
        return (
          <div>
            <a href='/?page=paintings' className="page-link">Paintings</a>
            <a href='/?page=drawings' className="page-link">Drawings</a>
            <a href='/?page=tomes' className="page-link-up">Tomes</a>
            <a href='/?page=photography' className="page-link">Photography</a>
            <a href='' className="page-link">Music</a>
            <a href='/?page=about' className="page-link">About</a> 
          </div>      
        );
        case 'illustration':
        return (
          <div>
            <a href='/?page=paintings' className="page-link">Paintings</a>
            <a href='/?page=drawings' className="page-link">Drawings</a>
            <a href='/?page=tomes' className="page-link">Tomes</a>
            <a href='/?page=photography' className="page-link">Photography</a>
            <a href='' className="page-link">Music</a>
            <a href='/?page=about' className="page-link">About</a> 
          </div>    
        );
        case 'photography':
        return (
          <div>
            <a href='/?page=paintings' className="page-link">Paintings</a>
            <a href='/?page=drawings' className="page-link">Drawings</a>
            <a href='/?page=tomes' className="page-link">Tomes</a>
            <a href='/?page=photography' className="page-link-up">Photography</a>
            <a href='' className="page-link">Music</a>
            <a href='/?page=about' className="page-link">About</a> 
          </div>    
        );
        case 'about':
        return (
          <div>
            <a href='/?page=paintings' className="page-link">Paintings</a>
            <a href='/?page=drawings' className="page-link">Drawings</a>
            <a href='/?page=tomes' className="page-link">Tomes</a>
            <a href='/?page=photography' className="page-link">Photography</a>
            <a href='' className="page-link">Music</a>
            <a href='/?page=about' className="page-link-up">About</a>  
          </div>   
        );
      default:
      return (
        <div>
          <a href='/?page=paintings'>Paintings</a>
          <a href='/?page=drawings'>Drawings</a>
          <a href='/?page=tomes'>Tomes</a>
          <a href='/?page=illustration'>Illustration</a>
          <a href='/?page=photography'>Photography</a>
          <a href=''>Music</a>
          <a href='/?page=about'>About</a>  
        </div>   
      );
    }
  },
  
  render() {
    return (
      <nav id="mainNav">
        {this.renderSwitch(this.props.gallery)}
      </nav>
    );
  }

});

let GalleryNav = function statelessFunctionComponentClass(props) {
  let index = props.index;
  let prevIndex = (Number(index)-1);
  let nextIndex = (Number(index)+1);
  let prevURL = "/?page=artwork&gallery=" + props.gallery + "&index=" + prevIndex;
  let back = "/?page=" + props.gallery;
  let nextURL = "/?page=artwork&gallery=" + props.gallery + "&index=" + nextIndex;

  return (
    <nav id="galleryNav">
      <a href={prevURL} id="galleryNav-prev" className="galleryNav"></a>
      <a href={back} id="galleryNav-back" className="galleryNav"></a>
      <a href={nextURL} id="galleryNav-next" className="galleryNav"></a>
    </nav>
  );
};


