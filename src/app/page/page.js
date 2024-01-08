import Browser from '../../components/Browser'
import Card from '../../components/Card'
import img from '../../components/images/n2.jpeg'
import a from '../../components/images/a.jpeg'
import b from '../../components/images/b.jpeg'
import v from '../../components/images/v.jpeg'
import img2 from '../../components/images/a1.jpeg'
import imgv from '../../components/images/vid.jpeg'
import imgt from '../../components/images/tomo.jpeg'


export default function Home() {
	const textoVida = "Esta es la pagina web de Vida Automercados realizada por un equipo de programadores donde yo desarrollé la API que consume este sitio web y alimenta constantemente la información utilizando Javascript y JSON, actualmente se encuenta en produccion. Te invito a que la visites haciendo click "
	const textoTomo = "Esta es una pagina web que hice hace mucho tiempo 100% desde 0 utilizando ReactJS actualmente ya no está en uso y la informacion fue removida sin embargo se encunetra alojada en un dominio gratiuto. Puedes visitarla pulsando"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
	<div id='main' className=''>
		<div className='w-full bg-base-100 h-1'>.</div>
		<div id='carrousel' className='flex flex-row'>
			<Card img={a}/>
			<Card img={b}/>
			<Card img={v}/>
		</div>
		<div className='w-full bg-base-100 h-1'>.</div>
		<div className='interlineas bg-base-100 ' >Especialista en PowerBI</div>
		<div className='w-full bg-base-100 h-1'>.</div>
		<section id='' className='grid gridado bg-base-300'>
			<div className="p-5"> 
			<Browser imagen={img} text={textoVida} titulo='PortalWeb' link='https://www.vidaloestodo.com/' di='3' />
			</div>
			<div className="p-5"> 
			<Browser imagen={img2} text={textoVida} titulo='Dashboard' link='https://www.vidaloestodo.com/' di='4' />
			</div>
			
		</section>
		<div className='w-full bg-base-100 h-1'>.</div>
		<div className='interlineas bg-base-100' > Desarrolador de Aplicaciones Web</div>
		<div className='w-full bg-base-100 h-1 pt-2' >.</div>
		<section id='' className='grid gridado bg-base-300'>
			<div className='p-5'>
					<Browser imagen={imgv} text={textoVida} titulo='vidaloestodo' link='https://www.vidaloestodo.com/' di='1' />
			</div>
			<div className='p-5'>
					<Browser imagen={imgt} text={textoTomo} titulo='tomodachi' link='https://coruscating-griffin-4f1ac5.netlify.app/' di='2' />
			</div>
		</section>

		
		<div className='w-full bg-base-100 h-1 pt-2' >.</div>
		<div className='interlineas bg-base-100' >Programador Backend</div>
		<div className='w-full bg-base-100 h-1 pt-2' >.</div>
	</div>
    </main>
  )
}
