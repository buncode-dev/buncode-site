import chibiImage from './assets/chibi.webp'
import bannerMask from './assets/banner-mask.webp'
import selfieImage from './assets/selfie.webp'
import cookoffImage from './assets/proj-cookoff.png'
import butterfilesImage from './assets/proj-butterfiles.webp'
import musicPlayerImage from './assets/proj-musicplayer.webp'
import bunnyImage from './assets/bunny.webp'
import './App.css'


interface CardData {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  // pills: string[];
}

const cardsData: CardData[] = [
  {
    title: "Bio",
    category: "> About",
    description: `I'm working towards my BA right now. 
      When I don't have to stress over exams, 
      I use my free time to work on side projects, 
      like the website you're on right now! 
      Besides coding, I also draw digital art, 
      like that drawing of me above. `,
    imageUrl: selfieImage,
  },
  {
    title: "Chun & Snuggles Coop Cook-off",
    category: "> Project",
    description: `This is a game I made in Godot 
      where you play as a chicken running a burger restaurant
      out of a backyard coop. The two main chicken characters
      are based on my partner's real-life pet chickens, Chun and Mr. Snuggles!`,
    imageUrl: cookoffImage,
  },
  {
    title: "Butterfiles",
    category: "> Project",
    description: `I'm making a website to catalog and share 
    songs for the PC game "Stepmania", after realizing how outdated
    and messy the current options are. It's a big learning experience
    for me, trying to combine my frontend and backend skills
    into one big project people would actually use.`,
    imageUrl: butterfilesImage,
  },
  {
    title: "Music Player + Clock",
    category: "> Project",
    description: `I'm using a Raspberry Pi Pico to build a
    cute little music player/clock as a gift for someone
    who really loves music. Building physical devices is
    new territory for me, but it's also been really
    fun designing every aspect like UI and learning about APIs.`,
    imageUrl: musicPlayerImage,
  }
]

// function animTypewriter(text: string) {
//   return {
//     animation: "typewriter 4s steps(" + text.length + 
//         ") 1s 1 normal both, blinkTextCursor 500ms steps(" + 
//         text.length + ") infinite normal"
//   }
// }

// ////////// Cards ////////////
function Card({ category, description, imageUrl, title }: CardData) {
  return (
    <div className="card hide-scrollbar">
      <p className="card-category">{category}</p>
      <img src={imageUrl} alt={title} className="card-image" />

      <section className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {/* {pills.map((pill, index) => (
          <p key={index} className="pill">{pill}</p>
        ))} */}
      </section>
    </div>
  )
}

function CoverCard() {
  return (
    <div className="card cover-card">
      <div className="banner">
        <img src={chibiImage} alt="Chibi" className="chibi" />
      </div>
      <div className="cover-content" style={{
        maskImage: `url(${bannerMask})`,
        WebkitMaskImage: `url(${bannerMask})`,
        maskSize: 'cover',
        WebkitMaskSize: 'cover',
        maskPosition: 'top',
        WebkitMaskPosition: 'top',
      }}>
        <h1 className="cover-title anim-typewriter"> &gt; April_</h1>
        <p>I'm a Comp Sci student studying at UNLV.</p>
        <div className="divider" />
        <a href="https://github.com/buncode-dev"><p className="pill">GitHub</p></a>
        <p className="pill">Linkedin</p>
        <p className="pill">Handshake</p>
      </div>
    </div>
  )
}

function CreditsCard() {
  return (
    <div className="card credits-card">
      <div className='card-content'>
        <img className='bunny-logo' src={bunnyImage} alt="Bunny Logo" />

        <h2 className="card-title">Credits</h2>
        <p>Website by me</p>
        <p>Art and design by me</p>
        <p>Background image by Daan Stevens on Pexels</p>
      </div>
      {/* <p className="pill watermark">buncode.dev</p> */}
    </div>
  )
}


// ////////// App ////////////
function App() {
  return (
    <>
      <main>
        {/* <PageDots /> */}
        <div className="cards-stack">
          <CoverCard />
          {cardsData.map((card, index) => (
            <Card
              key={index}
              category={card.category}
              description={card.description}
              imageUrl={card.imageUrl}
              title={card.title}
            />
          ))}
          <CreditsCard />
        </div>
      </main>
    </>
  )
}

export default App
