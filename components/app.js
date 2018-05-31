
let page = getQueryVariable("page");
let index = getQueryVariable("index");
let gallery = getQueryVariable("gallery");
let position = getQueryVariable("position");

let galleries = [
    paintings,
    drawings,
    tomes,
    illustration,
    photography
  ];

let galleriesMap = [
    "paintings",
    "drawings",
    "tomes",
    "illustration",
    "photography"   
]

let App = React.createClass({
    renderSwitch(param) {
        switch(param) {
          case 'paintings':
            return (
                <div className="pageContainer">
                    <div className="pagePane-Left">
                        <PageNav gallery="paintings"/>
                        <GalleryTitle gallery="paintings"/>
                        <Footer />       
                    </div>
                    <div className="pagePane-Right">
                        <ImageGrid gallery={paintings} />
                    </div>
                </div>
            );
            case 'drawings':
            return (
                <div className="pageContainer">
                    <div className="pagePane-Left">
                        <PageNav gallery="drawings"/> 
                        <GalleryTitle gallery="drawings"/>
                        <Footer />       
                    </div>
                    <div className="pagePane-Right">
                        <ImageGrid gallery={drawings} />
                    </div>
                </div>
            );
            case 'tomes':
            return (
                <div className="pageContainer">
                    <div className="pagePane-Left">
                        <PageNav gallery="tomes"/>
                        <GalleryTitle gallery="tomes"/> 
                        <Footer />       
                    </div>
                    <div className="pagePane-Right">
                        <div id="tomes-box">
                            <a href="?page=artwork&gallery=tomes&index=0" id="sq">Slidden Quill</a>
                            <a href="?page=artwork&gallery=tomes&index=24" id="entity">Entity</a>
                            <div className="clear"></div>
                            <a href="?page=artwork&gallery=tomes&index=54" id="ss">Square Scenes</a>
                        </div>
                    </div>
                </div>
            );
            case 'illustration':
            return (
                <div className="pageContainer">
                    <div className="pagePane-Left">
                        <PageNav gallery="illustration"/>
                        <GalleryTitle gallery="illustration"/> 
                        <Footer />       
                    </div>
                    <div className="pagePane-Right">
                        <ImageGrid gallery={illustration} />
                    </div>
                </div>
            );
            case 'photography':
            return (
                <div className="pageContainer">
                    <div className="pagePane-Left">
                        <PageNav gallery="photography"/>
                        <GalleryTitle gallery="photography"/>
                        <Footer />        
                    </div>
                    <div className="pagePane-Right">
                        <ImageGrid gallery={photography} />
                    </div>
                </div>
            );
            case 'about':
            return (
                <div className="pageContainer">
                    <div className="pagePane-Left">
                        <PageNav gallery="about"/>
                        <Footer />        
                    </div>
                    <div className="pagePane-Right">
                        <div id="about">
                            <img id="absolutLg" src="/images/illustration/absolut.jpg" />
                        </div>
                    </div>
                </div>
            );
            case 'artwork':
            return (
                <div className="pageContainer">
                    <div className="pagePane-Left">
                        <PageNav gallery={gallery}/>
                        <GalleryTitle gallery={gallery} />
                        <div id="galleryNavContainer">
                            <GalleryNav index={index} gallery={gallery} position={position}/>
                        </div> 
                        <Footer />       
                    </div>
                    <div className="pagePane-Right">
                        <Artwork index={index} gallery={gallery} />
                    </div>
                </div>
            );
          default:
          return (
                <div className="homeContainer">
                    <HomeNav/>
                    <ThumbnailGrid />
                    <Footer /> 
                </div>          
            );
        }
      },
      render() {
        return (
          <div>
            {this.renderSwitch(getQueryVariable("page"))}
          </div>
        );
      }
});


let Footer = React.createClass({
    getYear: function() {
        return (new Date()).getFullYear()
    },
    render() {
        return <div id="footer">All contents copyright {this.getYear()} Gareth Kaple</div>;
    }
});