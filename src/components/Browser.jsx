'use client'
import Image from 'next/image'
import img from './images/n2.jpeg'
import Modal from './Modal'



function Browser( props ) {
    return(
        <>
            <div >
                
            <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
                <div className="input">https://www.{props.titulo}.com/</div>
            </div>
            <div className="click" onClick={()=>document.getElementById(`my_modal_${props.di}`).showModal()}>
                <Image
                    id='imagen'
                    src={props.imagen}
                    alt="Picture of the author"
                />
           </div>
            </div>
            </div>
            <dialog id={`my_modal_${props.di}`} className="modal">
            <Modal text = {props.text} link = {props.link} titulo={props.titulo}/>
        </dialog>
        
        </>
    )
}

export default Browser