import Image from 'next/image'
import yo from '../components/images/yo.jpeg'
function Head() {
    return(
      <header className='flex flex-col items-center head bg-base-100'> 

        <section className='zoom flex flex-col items-center'>
        <div className="avatar">
          <div className="w-32 rounded-full">
          <Image
              src={yo}
              className='imag'
              alt="Picture of the author"
            />
          </div>
        </div>
        </section>
      </header>

    )
}

export default Head