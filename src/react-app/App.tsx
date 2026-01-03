import chibiImage from './assets/chibi.webp'
import bannerMask from './assets/banner-mask.webp'
import selfieImage from './assets/selfie2.webp'
import cookoffImage from './assets/proj-cookoff.png'
import butterfilesImage from './assets/proj-butterfiles.webp'
import musicPlayerImage from './assets/proj-musicplayer.webp'
import './App.css'


interface CardData {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  pills: string[];
}

const cardsData: CardData[] = [
  {
    title: "Bio",
    category: "> About",
    description: "My name is April and I'm currently working towards a BA in Computer Science. " +
      "I love coding and making side projects. " +
      "When I have my free time, I like drawing and designing.",
    imageUrl: selfieImage,
    pills: ["C++", "C#", "Python", "React", "Unity", "Godot"]
  },
  {
    title: "Chun & Snuggles Coop Cookoff",
    category: "> Project",
    description: "Business managment simulation 3D web game about 2 chickens running a burger restaurant.",
    imageUrl: cookoffImage,
    pills: ["Godot", "Python", "WebGL"]
  },
  {
    title: "Butterfiles",
    category: "> Project",
    description: "Song search website with filtering options and community interaction for the game Stepmania. In progress.",
    imageUrl: butterfilesImage,
    pills: ["React", "Database"]
  },
  {
    title: "Music Player + Clock",
    category: "> Project",
    description: "Spotify music player and clock on an e-ink screen running off a microcontroller with playback controls. In progress.",
    imageUrl: musicPlayerImage,
    pills: ["Raspberry Pi", "Python", "APIs", "HTML/CSS"]
  },
]


function Watermark() {
  return (
    <p className="pill watermark">buncode.dev</p>
  )
}


// cards
function Card({ category, description, imageUrl, title, pills }: CardData) {
  return (
    <div className="card">
      <p className="card-category">{category}</p>
      <img src={imageUrl} alt={title} className="card-image" />
      <section className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {pills.map((pill, index) => (
          <p key={index} className="pill">{pill}</p>
        ))}
      </section>
      {/* <Watermark /> */}
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
        <h1 className="cover-title">&gt; April_</h1>
        <p>I'm a Comp Sci student studying at UNLV.</p>
        <div className="divider" />
        <a href="https://github.com/buncode-dev"><p className="pill">GitHub</p></a>
        <p className="pill">Linkedin</p>
        <p className="pill">Handshake</p>
        {/* <Watermark /> */}
      </div>
    </div>
  )
}

function CreditsCard() {
  return (
    <div className="card credits-card">
      <div className='card-content'>
        <h2 className="card-title">Credits</h2>
        <p>Made in React + Vite</p>
        <p>Website by me</p>
        <p>Art and design by me</p>
        <p>Background image by <a href="https://unsplash.com/@anniespratt">Annie Spratt</a> on Unsplash</p>
      </div>
      <Watermark />
    </div>
  )
}


function App() {
  return (
    <>
      <main>
        <div className="cards-stack">
          <CoverCard />
          {cardsData.map((card, index) => (
            <Card
              key={index}
              category={card.category}
              description={card.description}
              imageUrl={card.imageUrl}
              title={card.title}
              pills={card.pills}
            />
          ))}
          <CreditsCard />
        </div>
      </main>
    </>
  )
}

export default App
