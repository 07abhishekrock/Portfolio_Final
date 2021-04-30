import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {Project, ProjectsList} from './components/projects';
import project1 from './images/project1.svg';
import project2 from './images/project2.svg';
import project3 from './images/project3.svg';
import download_icon from './images/download_icon.svg';
import reactDom from 'react-dom';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function scrollIntoView(element){
  let dom_element = document.querySelector(element);
  dom_element.scrollIntoView();
}


function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function Navbar(props){
  let nav = useRef(null);

  return(
    <nav ref={nav} >
      <h1>Abhishek <b>Jha</b></h1>
      <ul>
        <li onClick={()=>
        {
          nav.current.removeAttribute('expand');
          scrollIntoView('div.about-us');
        }
        }>aboutMe</li>
        <li onClick={()=>
        {
          nav.current.removeAttribute('expand');
          scrollIntoView('div.project-container')
        }
        }>Projects</li>
        <li onClick={()=>{
          nav.current.removeAttribute('expand');
          scrollIntoView('div.resume');
        }
        }>Resume</li>
        <li onClick={()=>
        {
          nav.current.removeAttribute('expand');
          scrollIntoView('div.contact-me');
        }
        }
        >contactMe</li>
      </ul>
      <button className="nav-expand-btn" onClick={()=>{
        nav.current.getAttribute('expand') === null ? nav.current.setAttribute('expand', '') : nav.current.removeAttribute('expand');
      }}>
      <span></span>
      <span></span>
      <span></span>
      </button>
    </nav>
  )
}

function HeroSection(props){
  useEffect(()=>{
    //starting animation
    let tl = gsap.timeline({onComplete:()=>console.log('animation complete'),  repeat:-1, delay:1});
    gsap.to('div.hero-section>p',{translateX:'0%', duration:1, delay:0.5, ease:'power4.out'});
    gsap.to('div.hero-section>div>div:first-child', {translateX:'200%',rotateZ:360,transformOrigin:'50% 50%',transformBox:'fill-box',duration:1}, 'start');
    gsap.to('div.hero-section>div>div:last-child',{translateX:'200%',delay:0.2},'start');
    tl.addLabel('squish').to('div.hero-section>div>div:first-child',{scaleY:0.9, duration:0.3, transformOrigin:'50% 100%'},'squish')
    .addLabel('jump').to('div.hero-section>div>div:first-child', {translateY:'-50%', duration:0.5, ease:"power1.out"},'jump').to('div.hero-section>div>div:last-child',{scaleX:1.11,ease:"power1.out",duration:0.5},'jump').to('#mouth',{clipPath:'url(#clipPath)', duration:0.2}, 'jump')
    .addLabel('rotate').to('div.hero-section>div>div:first-child',{rotateZ:0, duration:0.5, transformOrigin:'50% 50%', transformBox:'fill-box'})
    .addLabel('land').to('div.hero-section>div>div:last-child',{scaleX:1,ease:'bounce.out',duration:0.5},'land').to('div.hero-section>div>div:first-child',{translateY:'0%', duration:0.5,ease:'bounce.out', scaleY:1}, 'land').to('#mouth',{clipPath:'initial',duration:0.2},'land')

  },[])
  return(
    <div className="hero-section">
      <div>
        <div>
            <svg viewBox="0 0 410 411" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                  <clipPath id="clipPath">
                     <path id="mouth_new" d="M227.5 340C227.5 343.371 225.451 346.483 222.011 348.776C218.575 351.067 213.8 352.5 208.5 352.5C203.2 352.5 198.425 351.067 194.989 348.776C191.549 346.483 189.5 343.371 189.5 340C189.5 336.629 191.549 333.517 194.989 331.224C198.425 328.933 203.2 327.5 208.5 327.5C213.8 327.5 218.575 328.933 222.011 331.224C225.451 333.517 227.5 336.629 227.5 340Z" fill="white" stroke="black" strokeWidth={1}/>
                  </clipPath>
            </defs>
            <g id="Group 14">
            <circle id="Ellipse 1" cx="205" cy="205" r="203.5" fill="#FFDBAC" stroke="black" stroke-width="3"/>
            <path id="Vector 10" d="M26 170L81 194L89.5 207L18 175.5L26 170Z" fill="black" stroke="black"/>
            <path id="Vector 11" d="M375.61 168.333L322.222 195.731L314.553 209.238L383.939 173.321L375.61 168.333Z" fill="black" stroke="black"/>
            <path id="Vector 9" d="M172 219.5L164 226L174.5 197H231L241.5 226L233 219.5L211.5 202H195L172 219.5Z" fill="black" stroke="black"/>
            <path id="Vector 2" d="M171.848 193.657H83.8268C82.2233 193.657 81.2717 195.449 82.1702 196.778L107.364 234.02C107.736 234.57 108.356 234.9 109.02 234.9H158.703C159.551 234.9 160.307 234.365 160.589 233.565L173.734 196.323C174.193 195.021 173.228 193.657 171.848 193.657Z" fill="black" fill-opacity="0.24" stroke="black" stroke-width="2"/>
            <path id="Vector 3" d="M233.3 193.657H321.321C322.925 193.657 323.876 195.449 322.978 196.778L297.784 234.02C297.412 234.57 296.792 234.9 296.128 234.9H246.445C245.597 234.9 244.841 234.365 244.559 233.565L231.414 196.323C230.955 195.021 231.92 193.657 233.3 193.657Z" fill="black" fill-opacity="0.24" stroke="black" stroke-width="2"/>
            <path id="Vector 4" d="M200.148 213.065L218.721 271.107C219.134 272.397 218.171 273.716 216.816 273.716H200.148" stroke="black"/>
            <path id="Vector 5" d="M174 197H231" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="Vector 1" d="M64.0761 143.709L9.91237 196.811C9.87264 196.85 9.82494 196.88 9.77256 196.898L6.97767 197.898C4.79607 198.679 2.5 197.062 2.5 194.745C2.5 194.582 2.51186 194.419 2.53548 194.258L5 177.462L7.57076 164.781C11.1723 147.016 17.2582 129.846 25.6491 113.779C32.8566 99.977 41.7074 87.0982 52.0086 75.4228L53.1702 74.1063C62.2767 63.7851 72.3877 54.3956 83.3536 46.0766L83.7385 45.7846C95.9018 36.5572 109.065 28.7278 122.979 22.444L124.369 21.8161C134.533 17.2262 145.087 13.5569 155.906 10.8522C167.68 7.90858 179.714 6.12104 191.835 5.51496L195.097 5.35188C213.046 4.45441 231.037 5.84298 248.636 9.48417L257.308 11.2783L274.848 17.5022C288.19 22.2365 301.024 28.2954 313.159 35.5881L320.5 40.0002L327.834 45.9444C338.209 54.3533 347.767 63.7239 356.379 73.931L371.342 91.6649C374.558 95.4765 377.31 99.6566 379.541 104.117L390.111 125.259C394.556 134.147 397.859 143.562 399.944 153.279L407.5 188.5C407.984 192.554 403.129 194.988 400.17 192.175L341.527 136.417C337.479 132.567 331.627 131.287 326.34 133.093L245.543 160.708C241.456 162.105 236.965 161.672 233.22 159.52L189.572 134.446C184.946 131.789 179.255 131.789 174.629 134.446L132.069 158.896C127.709 161.4 122.385 161.554 117.889 159.306L81.2854 141.004C75.5594 138.141 68.6475 139.227 64.0761 143.709Z" fill="#3B3024" stroke="black"/>
            <path id="mouth" d="M242.604 322.237L172.249 329.515L190.444 353.775H224.408L242.604 322.237Z" fill="white" stroke="black"/>
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M130.099 324.579L187.371 296.463C188.608 295.856 189.899 295.365 191.227 294.996L198.027 293.107C206.581 290.731 215.595 290.551 224.237 292.585L229.215 293.756C230.854 294.142 232.429 294.762 233.891 295.597L282.322 323.272C285.946 320.745 289.937 318.778 294.162 317.445L302.041 314.959L341.251 300.395C343.412 299.593 345.632 298.962 347.892 298.51L355.69 296.951C360.305 296.028 365.064 296.098 369.651 297.156L375.203 298.437C377.336 298.93 379.299 299.984 380.888 301.492C382.282 302.957 382.395 305.223 381.153 306.82L377 314.959L356.5 342C354.685 344.412 351.772 347.513 349.5 349.5L337.5 361L323.464 370.238C321.317 372.115 318.993 373.776 316.523 375.2L294.763 387.74L268.197 399.547C264.098 401.369 259.743 402.548 255.284 403.044L234.5 407.5L213 409.5C210.124 409.82 205.883 409.755 203 409.5L170.5 406.5C167.107 406.201 164.232 405.577 161 404.5L140.5 399L120.5 391C116.818 389.773 113.23 387.653 110 385.5L94.0506 376.5L78.5 364.5C76.1073 362.905 73.5334 361.034 71.5 359L52.5 339C48.9352 335.435 45 332 42.5 327.5C41 325.5 39.6963 323.795 38.5 322L34 315C33.8826 314.824 32.067 312.201 32 312C31.4673 310.402 36.02 308.877 37.7017 308.976L54.812 309.983L94.0506 312.005C99.2376 312.272 104.335 313.462 109.104 315.52L130.099 324.579ZM137.053 327.58L137.922 327.955C142.18 329.792 146.117 332.295 149.587 335.371L189.172 370.457C194.68 375.34 201.786 378.036 209.147 378.036C216.626 378.036 223.838 375.252 229.378 370.228L272.929 330.728L277.639 326.918L237.489 312.23C233.627 310.817 229.655 309.726 225.613 308.968C216.796 307.315 207.752 307.266 198.917 308.825L191.657 310.107L137.053 327.58Z" fill="#3B3024" stroke="#3B3024"/>
            </g>
            </svg>
          </div>
        <div></div>
      </div>
      <p>I am a frontend web developer, who loves creating art out of simple and minimal stuff.</p>
    </div>
  )
}

function AboutUs(props){
  let ref = useRef(null);
  useEffect(()=>{
    ScrollTrigger.saveStyles('div.about-us>ul');
      ScrollTrigger.matchMedia({
        '(min-width:801px)':function(){
          let tl = gsap.timeline(
            {
              scrollTrigger:{
                trigger:'div.about-us>ul',
                // start:'10% 60%',
                start:'top bottom',
                end:`+=${window.innerHeight * 0.85}`,
                // endTrigger:,
                scrub:1,
              }

            }
          )
            tl.addLabel('start').from(ref.current.children[1].children[0], {translateY:'10%'}, 'start')
            .addLabel('second').from(ref.current.children[1].children[1], {translateY:'10%'}, 'second')
            .addLabel('third').from(ref.current.children[1].children[2], {translateY:'10%'}, 'third')
            .addLabel('fourth').from(ref.current.children[1].children[3], {translateY:'10%'}, 'fourth')
            .addLabel('fifth').from(ref.current.children[1].children[4], {translateY:'10%'}, 'fifth')
            .addLabel('first-move').to(ref.current.children[1],{translateX:'-30%'},'first-move')
    },




  })


  }, [])

  return(
    <div className="about-us" ref={ref} >
      <h1>About <b>Me</b></h1>
      <ul className="about-us-list">
          <li>
            I love reviewing UI design for inspiration but often end up feeling petty about myself <br/><br/>:(
          </li>
          <li>
            I like keeping my designs simple and minimal.
          </li>
          <li>
            I love creating websites that are more of an experience than just a utility.
          </li>
          <li>
            I like Rounded fonts and black monotone web designs.
          </li>
          <li>
            I love trivia in games and history, little details always bring excitement.
          </li>
      </ul>
    </div>
  );
}

function Tools(props){
  useEffect(()=>{
    ScrollTrigger.matchMedia({
      'all':function(){
        let tl = gsap.timeline(
          {
            scrollTrigger:{
              trigger:'div.tools>ul',
              start:'20% bottom',
              end:`+=${window.innerHeight * 0.75}`,
              scrub:1,
            }
          }
        );
        tl.addLabel('start').from('div.tools li:first-child',{rotateY:90})
        .from('div.tools li:nth-child(2)',{rotateX:90})
        .from('div.tools li:nth-child(3)',{rotateY:90})
        .from('div.tools li:nth-child(4)',{rotateX:90})
        .from('div.tools li:nth-child(5)',{rotateY:90})
        .from('div.tools li:nth-child(6)',{rotateX:90})
        .from('div.tools li:nth-child(7)',{rotateY:90})
      }


  })
}
 ,[])
  return(
    <div className="tools">
    <h1>I know these <b>TOOLS</b></h1>
    <ul>
      <li id="js">Javascript</li>
      <li id="html">HTML</li>
      <li id="css">CSS</li>
      <li id="gsap">GSAP</li>
      <li id="firebase">FIREBASE</li>
      <li id="react">REACT<small>JS</small></li>
      <li id="figma">FIGMA</li>
    </ul>
    </div>
  );
}

function Resume(props){
  let [opacity_array, set_opacity_array] = useState([1,0,0,0,0,0]);
  let [index, set_index] = useState(0);
  let character_ref = useRef(null);
  useInterval(()=>{
    let new_array = [0,0,0,0,0,0];
      new_array[(index + 1)%6] = 1;
      set_opacity_array(new_array);
      set_index((index + 1) % 6);
  },600);

  return(
    <div className="resume" ref={character_ref}>
      <div className="para">
        <p>I like to put character in my web designs, inspired by my own characters...</p>
        <span><i></i><b>My Resume</b></span>
      </div>
      <div className="characters">

        <div id="school" visible={opacity_array[0]}></div>
        <div id="party" visible={opacity_array[1]}></div>
        <div id="graduate" visible={opacity_array[2]}></div>
        <div id="chill" visible={opacity_array[3]}></div>
        <div id="programmer" visible={opacity_array[4]}></div>
        <div id="shaktimaan" visible={opacity_array[5]}></div>

          <button><i style={{backgroundImage:`url(${download_icon})`}}></i>Download Icons</button>

      </div>


    </div>
  );
}

function ContactMe(props){
  let element_ref = useRef(null);
  return(
    <div className="contact-me" ref={element_ref}>
      <div className="contact-text">
      <p>Let's create something awesome together...</p>
      <div></div>
      </div>


      <div className="contact-form">
        <span></span>
        <h1>Contact Me</h1>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Write Me Here"></textarea>
        <button>Let's Meet !!!</button>
      </div>
    </div>
  );
}

function useWindowScroll(callback){
  let callback_ref = useRef(null);
  useEffect(()=>{
    callback_ref.current = callback;
    window.onscroll = ()=>{
      callback_ref.current();
    }
    return ()=>window.removeEventListener('scroll',callback_ref.current)
  },[callback])

}



function NavBubble(props){
  let bubble_ref = useRef(null);
  let [scroll_pos, set_scroll_pos] = useState(0);
  function scrollEvent(){
      let new_scroll_pos = window._scrollTop();
      if(new_scroll_pos > scroll_pos) {
        //scrolled down
        bubble_ref.current.setAttribute('up', '0');
      }
      else{
        bubble_ref.current.setAttribute('up','1');
      }
      set_scroll_pos(new_scroll_pos);

      if(window._scrollTop() <= 0.08 * window.innerWidth){
        bubble_ref.current.removeAttribute('expand');
        bubble_ref.current.setAttribute('squish','');
      }

      else{
        bubble_ref.current.removeAttribute('squish');
      }
  }
  useWindowScroll(scrollEvent);
  return(
    <div className="nav-bubble" ref={bubble_ref}>
      <span onClick={()=>{
        if(bubble_ref.current.getAttribute('expand') === null){
          bubble_ref.current.setAttribute('expand', '');
        }
        else{
          bubble_ref.current.removeAttribute('expand');
        }
      }}></span>
      <div></div>
      <ul>
        <li onClick={()=>{
          window._scrollTop(0);
          bubble_ref.current.removeAttribute('expand');
        }}>Move To Top</li>
        <li onClick={()=>{
          scrollIntoView('div.about-us');
          bubble_ref.current.removeAttribute('expand');
        }}
        >About Us</li>
        <li onClick={()=>{
          scrollIntoView('div.tools');
          bubble_ref.current.removeAttribute('expand');
        }}>Tools I know</li>
        <li onClick={()=>{
          scrollIntoView('div.resume');
          bubble_ref.current.removeAttribute('expand');
        }}>Resume</li>
        <li onClick={()=>{
          scrollIntoView('div.project-container');
          bubble_ref.current.removeAttribute('expand');
        }}>My Projects</li>
        <li onClick={()=>{
          scrollIntoView('div.contact-me');
          bubble_ref.current.removeAttribute('expand');
        }}>Contact Me</li>
      </ul>
    </div>
  )
}

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Tools/>
      <Resume/>
      <ProjectsList>
        <Project icon={project1} title={"Play Store Profile Collection"}></Project>
        <Project icon={project2} title={"Simple Weather App"}></Project>
        <Project icon={project3} title={"Together Chat"}></Project>
      </ProjectsList>
      <ContactMe/>
      <NavBubble/>
      <div className="shadow"></div>
    </React.Fragment>
  );
}

export default App;
