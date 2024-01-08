import Image from "next/image"


function Card( props ) {
    return(
        <div className="card bg-base-200 shadow-xl p-1 m-5">
                <Image
                    src={props.img}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
		</div>
    )
}

export default Card