import React from 'react'
// import anime from 'animejs';
// import './Logo.css'
// import Page from './logo.html';

// class Logo extends Component {
//     componentDidMount() {
//         // This is required if you use pure embed.js approach
//         // Or if you use lazy-loading of iFrames
//         // It initiates the iFrame and adjusts its height if required
//         window.iframely && iframely.load();
//     };
    
//     // Depending on your components, you may need to move iframely.load() 
//     // from `componentDidMount` to `componentDidUpdate`. Quote from React docs:
//     // "Do note that componentDidMount will however not be called on component updates"
    
//     getIframelyHtml() {
//         // If you use embed code from API
//         // return {__html: this.iframelyEmbedHtmlCode};
//         return {__html: '<a href="' + 'file:///E:/работа/SDO/sdo/src/components/Logo/logo.html' + '" data-iframely-url></a>'};
    
//         // Alternatively, if you use plain embed.js approach without API calls:
//         // return {__html: '<a href="' + this.url + '" data-iframely-url></a>'};
//         // no title inside <a> eliminates the flick
    
//         // but getting actual HTML from our APIs is still recommended 
//         // as it will have better sizing initially
//     };
    
//     render() {
//         // `dangerouslySetInnerHTML` is safe,
//         // Naming is meant to make sure you trust the source,
//         // with &iframe=1&omit_script=1 - the source will be always be Iframely 
//         return <div dangerouslySetInnerHTML={this.getIframelyHtml()} />
//     }
  
// }

const Logo = ()=>{
   
    // const loadHtml = ()=>{
    //     return {__html: Page};
    // }

    // return <div dangerouslySetInnerHTML={loadHtml()} ></div>
    // return <a href='./logo.html' data-iframely-url></a>
    return <div>

    </div>
}

export {Logo}