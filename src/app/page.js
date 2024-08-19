import '../components/styles/card.css'
// import { motion } from 'framer-motion'


export default function Contacto() {

  // const anim = (variants) =>{
  //   return{
  //     initial: "initial",
  //     animete: "enter",
  //     exit: "exit",
  //     variants
  //   }
  // }

  // const opacity = {
  //   initial:{
  //     opacity: 0
  //   },
  //   enter:{
  //     opacity: 1,
  //     transition: {
  //       duration: 2
  //     }
  //   },
  //   exit: {
  //     opacity : 1
  //   }
  // }


  return (
    <div id="main" className="flex min-h-screen items-center justify-between">
      <section className="bussinesscard">
          <div className="flip">
            <div className="front">				
              <div className="top">				
                <div className="logo"><span className="fat">E</span><span className="skinny">T</span></div>				
              </div>
              <div className="nametroduction">
                <div className="name">Eduardo Tovar</div>
                <div className="introduction">IT Solutions</div>
              </div>	
              <div className="contact">						
                <div className="website">
                  <span className="ion-earth"></span>
                  <a href="#">www.eduardo.me</a>
                </div>
                <div className="twitter">
                  <span className="ion-social-twitter"></span>
                  <a href="#">@edu.at.66</a> 
                </div>												
                <div className="phone ">
                  <span className="ion-ios7-telephone"></span> 
                  <a href="#">+58 412 0153018</a> 
                </div>
                <div className="email ">
                  <span className="ion-paper-airplane"></span>
                  <a href="#">eduar06tae@gmail.com</a>
                </div>
              </div>						
            </div>
            <div className="back"></div>
          </div>
        </section>
        <section className="tooltip">
          <p>
            Hover over the card to see more.
          </p>
        </section>
    </div>
  )
}
