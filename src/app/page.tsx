import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section id="Home">
        <div className='flex flex-col md:flex-row justify-between items-center h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-10'>
          <div className="flex flex-col justify-center">
            <big className="text-4xl font-normal">Hi, I am <b className='font-sans'>Alizah!</b></big>
            <big className="text-5xl font-normal flex items-center mt-4">
              A <b className='font-serif'>Web Developer</b> 
              <br /> <span className='mx-2'>&</span> 
              <b className='font-serif'>Designer</b></big>
          </div>
          <div className="flex-1 flex justify-center md:justify-end transition-transform duration-300 hover:scale-105">
            <Image src='/home.avif' alt='image' width={600} height={600} className='rounded-full object-cover overflow-hidden w-z0 h-90' />
          </div>
        </div>  
      </section>

      <section id="About" className="py-32 ">
        <div className='flex flex-col md:flex-row align-middle justify-center h-auto p-8 space-y-6 md:space-y-0 md:space-x-8'>
          <div className='flex flex-col items-start md:space-y-4 max-w-lg'>
            <h1 className='text-4xl font-semibold text-white'>Hi, I am Alizah!</h1>
            <p className='text-2xl font-medium text-white leading-relaxed mb-4'>
               I am a Management Science student at NED UET with a focus on web development and generative AI. I am skilled in Next.js, Tailwind CSS, HTML, and TypeScript. I am also passionate about cybersecurity and ethical hacking, aiming to contribute meaningfully to these fields!
            </p>
          </div>  
          <div className='w-[500px] h-[500px] overflow-hidden object-cover rounded-lg transition-transform duration-300 hover:scale-105'>
            <Image src='/about.avif' alt='image' width={500} height={500}/>
          </div>
        </div>
      </section>

      <section id="Skills">
        <div className='flex flex-col items-center justify-center h-screen'>
         <h1 className='text-4xl font-bold mb-20'>My Skills</h1>
         <p className='text-xl font-semibold mb-8 text-center'>In Programming:</p>
          <div className='flex space-x-8'>
            <div className='flex flex-col items-center border p-4 rounded-lg transition-transform duration-300 hover:scale-105'>
              <Image src='/html.png' alt='logo' width='100' height='100' />
              <p className='mt-2'>HTML</p>
            </div>
            <div className='flex flex-col items-center border p-4 rounded-lg transition-transform duration-300 hover:scale-105'>
              <Image src='/css.png' alt='logo' width='100' height='100' />
              <p className='mt-2'>CSS</p>
            </div>
            <div className='flex flex-col items-center border p-4 rounded-lg transition-transform duration-300 hover:scale-105'>
              <Image src='/typescript.png' alt='logo' width='100' height='100' /> 
              <p className='mt-2'>Typescript</p>
            </div>
            <div className='flex flex-col items-center border p-4 rounded-lg transition-transform duration-300 hover:scale-105'>
              <Image src='/react.png' alt='logo' width='100' height='100' />
              <p className='mt-2'>REACTjs</p>
            </div>
            <div className='flex flex-col items-center border p-4 rounded-lg transition-transform duration-300 hover:scale-105'>
              <Image src='/next.png' alt='logo' width='100' height='100' />
              <p className='mt-2'>NEXTjs</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Contacts">
        <div className='flex flex-col items-center justify-center h-screen p-4'>
          <h1 className='text-4xl font-bold mb-8'>Contact Me</h1>
          <form className='flex flex-col space-y-4 w-full max-w-md'>
            <input
              type="text"
              placeholder='Your Name'
              className='border p-2 rounded text-black'
              required 
            />
            <input
              type="email"
              placeholder='Your Email'
              className='border p-2 rounded text-black'
              required 
            />
            <input
              type="text"
              placeholder='Subject'
              className='border p-2 rounded text-black'
              required 
            />
            <textarea
              name="text"
              placeholder='Your Message'
              className='border p-2 rounded h-32 text-black'
            />
            <button
              type='submit'
              className='bg-slate-400 text-black p-2 rounded transition-transform duration-300 hover:scale-105'>
               send Message! 
            </button>
         </form>
          <div className='text-white mt-8'>
            <div className='flex items-center'>
              <Image src='/gmail.png' alt='logo' width='20' height='20' />
              <span className='ml-2'>alizahfatima008@gmail.com</span>
            </div>
            <p>Follow me on social media:</p>
            <div className='flex flex-col items-start'>
              <a 
                href="https://www.linkedin.com/in/alizah-fatima-a096952b4/" 
                target='_blank' 
                rel='noopener noreferrer' 
                className='no-underline flex items-center'>
                <Image src='/linkedin.png' alt='logo' width='20' height='20' />
                <span className='ml-2'>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/alizah-fatima"
                target='_blank'
                rel='noopener noreferrer'
                className='no-underline flex items-center'>
                <Image src='/github.png' alt='logo' width={20} height={20} />
                <span className='ml-2'>Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
