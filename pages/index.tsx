import { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'

const sections = [
  { title: 'Cut, Upload, Yell!', content: 'Yello allows you to cut any part of a YouTube video, convert it to an audio file and associate it to a command that can be used in discord to play the audio in your channel!', img_url: '/assets/editor.png' },
  { title: 'Play the audio in your channel!', content: 'Use the name you gave the audio during the upload as a command to play the audio in your channel!', img_url: '/assets/message.png' },
  { title: 'Manage your audios', content: 'The Yello dashboard allows you to freely manage all your uploaded audios You can delete or edit the name/command.', img_url: '/assets/dashboard.png' },
  { title: 'Change Prefix and Permissions', content: 'Yello allows you to choose your favourite prefix to run commands. <br/> You will also be able to allow only specific roles in your Discord Server to view, add, edit and delete audios in Yello.', img_url: '/assets/settings.png' }
]

const Home: NextPage = () => {
  
  return (
    <div className="py-8 px-5">
      <Head>
        <title>Yello Discord Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img 
        src="/assets/right_hand.png" 
        className="fixed w-80 hidden md:block" 
        alt="right_hand" 
        style={{ 
          right: -20,
          top: '50%'
        }}
      />

      <img 
        src="/assets/left_hand.png" 
        className="fixed w-64 hidden md:block" 
        alt="left_hand" 
        style={{ 
          left: -20,
          top: '20%'
        }}
      />

      <section className="flex justify-center items-center flex-col my-40">
        <div>
          <h1 className="text-primary font-secondary text-5xl text-center mb-5">A fun bot for Discord.</h1>
          <p className="text-white font-primary mb-12 text-center">Cut your favourites audio bits from a YouTube Video and yell'em in your channel!</p>
        </div>
        <Button 
          blue 
          text="Invite to Discord" 
          onClick={() => {
            window.open(
              'https://discord.com/oauth2/authorize?client_id=783637010819973142&scope=bot&permissions=8',
              '_blank'
            );
          }}
        />

      </section>
    
      {sections.map((section, i) => (
        <section key={i} className="py-20 flex justify-center mx-auto flex-col" style={{ maxWidth: 500 }}>
          <div className="flex-1 text-center mb-10">
            <h2 className="text-primary font-secondary text-4xl mb-5">{section.title}</h2>
            <p className="text-white font-primary" dangerouslySetInnerHTML={{ __html: section.content }}></p>
          </div>
          <img src={section.img_url} alt={section.title} style={{ maxWidth: 450, margin: '0 auto' }} className="w-full"/>
        </section>
      ))}


        <section className="py-20 flex justify-center mx-auto flex-col" style={{ maxWidth: 500 }}>
          <div className="flex-1 text-center mb-10">
            <h2 className="text-primary font-secondary text-4xl mb-5">What are you waiting for?!</h2>
            <p className="text-white font-primary">Add YELLO to your Discord Server now!</p>
          </div>
          <Button 
            blue 
            text="Invite to Discord" 
            onClick={() => {
              window.open(
                'https://discord.com/oauth2/authorize?client_id=783637010819973142&scope=bot&permissions=8',
                '_blank'
              );
            }}
          />
        </section>

    </div>
  )
}


export default Home
