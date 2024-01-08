
function Browser( props ) {
    return(
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{props.titulo}</h3>
                <p className="py-4">{props.text} <u><a href={props.link}>Aqui.</a></u></p>
            </div>

    )
}

export default Browser