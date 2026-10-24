import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Menu, Search, ShieldCheck, X } from 'lucide-react';
import './styles.css';

const cdn = 'https://ueeshop.ly200-cdn.com/u_file/UPBB/UPBB634';
const image = (path) => `${cdn}/${path}`;
const slides = [
  image('2601/24/photo/df2c8b7a-370c-4dd4-b818-5677547f3c111.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_0,w_1920'),
  image('2601/24/photo/6843d5e6-2654-44c0-b914-0fc9c01c3b361.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_0,w_1920'),
  image('2407/31/photo/b86e40e1-e16d-4eb2-b4b8-9a6882d8505f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_0,w_1920'),
];

const categories = [
  { label: 'Facial Recognition', icon: '◉' },
  { label: 'Fingerprint Recognition', icon: '◌' },
  { label: 'TUYA Waterproof Access Control', icon: '⌑' },
  { label: 'RFID & QR code & UHF reader', icon: '▦' },
  { label: 'Access Controller', icon: '▤' },
  { label: 'Smart Lock', icon: '⌑' },
  { label: 'Guard Tour System', icon: '⌖' },
  { label: 'Date Time Stamp Machine', icon: '◷' },
];

const products = [
  ['TM-AIFace11F Dynamic Face & Fingerprint Recognition Terminal', '2401/products/18/79cd5a81ae.jpg', 'Facial Recognition'],
  ['TM-AI07F Dynamic Face&Fingerprint Recognition Terminal', '2105/products/13/1a5dd5be85.jpg', 'Facial Recognition'],
  ['TM-AI08 Dynamic Face Recognition Terminal', '2104/products/08/2e873241b0.jpg', 'Facial Recognition'],
  ['TFS50 Metallic TCP/IP Wifi Capacitive Fingerprint Sensor', '2003/products/07/7583cda900.jpg', 'Fingerprint Recognition'],
  ['TM20 Built in Battery Access Control With SMS Alert', '1910/products/27/efddce1092.png', 'Fingerprint Recognition'],
  ['TM3800 Fingerprint Reader Time Clocking Machine', '1910/products/31/6e0f562e11.png', 'Fingerprint Recognition'],
  ['TM-T12 TUYA IP68 waterproof access control', '2306/products/28/a1cd46270c.jpg', 'TUYA Waterproof Access Control'],
  ['TM-TF2 TUYA IP68 waterproof metal fingerprint access control', '2305/products/17/16c2039511.jpg', 'TUYA Waterproof Access Control'],
  ['TM-TF3 TUYA IP68 waterproof metal fingerprint access control', '2305/products/17/445f3075e2.jpg', 'TUYA Waterproof Access Control'],
  ['TDS19 RFID Door Control System Access Control Card Reader', '2003/products/17/ad10a7bb44.jpg', 'RFID & QR code & UHF reader'],
  ['TM-Q1S QR code reader', '2305/products/09/412a98eb51.jpg', 'RFID & QR code & UHF reader'],
  ['TM-SM06A Long Range UHF RFID Reader', '2209/fb17e3661f.jpg', 'RFID & QR code & UHF reader'],
  ['SS02/04 Multi Doors Fingerprint Reader RFID Kit', '2312/products/15/92561b7127.jpg', 'Access Controller'],
  ['TM-T09 Smart Hotel Lock', '2305/products/13/770b05e2eb.jpg', 'Smart Lock'],
  ['TM-M1 Smart TUYA Fingerprint Door Lock', '2502/13/products/M1-0151-a5ae.png', 'Smart Lock'],
  ['TL20 Smart TUYA Fingerprint Door Lock', '2106/products/11/aa1d328813.jpg', 'Smart Lock'],
  ['TM-K2 Access Control Reader', '2107/products/13/ad8d220392.jpg', 'Access Controller'],
  ['TM-101Z Access Control Reader', '2107/products/13/cd60b76ad5.jpg', 'Access Controller'],
  ['TM-101E Access Control Reader', '2107/products/13/0ecbf20107.jpg', 'Access Controller'],
  ['AP50 Touch Screen Electronic Date Time Stamp Machine', '2210/products/17/9579aec8a5.jpg', 'Date Time Stamp Machine'],
].map(([name, src, category]) => ({ name, category, src: image(`${src}?x-oss-process=image/quality,q_100/resize,m_lfit,h_500,w_500`) }));

const solutions = [
  ['Face / fingerprint / QR / RFID', 'Access control for turnstile gate systems'],
  ['Web based software + mobile app', 'Time attendance and access control'],
  ['BioSecureCard', 'Secure biometric data, compliant with EU GDPR standards'],
  ['Real-time face snapshot', 'Access records pushed to Telegram, Line and Viber'],
  ['Elevator control', 'Face recognition elevator access systems'],
  ['Video intercom', 'Facial and fingerprint access control'],
];

function Header({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const nav = ['Home', 'Products', 'News', 'Support', 'About Us', 'Contact Us', 'Blog'];
  return <>
    <div className="topline"><div className="container topinner"><span>Global Biometric Security Solution Provider Since 2000</span><div><a href="#contact">✉ &nbsp;info@timyteco.net</a><span className="top-sep">|</span><button className="lang">EN <ChevronDown size={12}/></button></div></div></div>
    <header className="header"><div className="container headerinner">
      <a className="brand" href="#home" aria-label="TIMY homepage"><img src={image('2403/27/photo/a08bedc5c2.png')} alt="TIMY" /></a>
      <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map((item) => <a key={item} href={item === 'Home' ? '#home' : item === 'Products' ? '#products' : item === 'Contact Us' ? '#contact' : '#about'} onClick={() => setMenuOpen(false)}>{item}{['Products','Support','About Us'].includes(item) && <ChevronDown size={13}/>}</a>)}</nav>
      <div className="head-actions"><button className="search-toggle" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}><Search size={20}/></button><a className="quote-small" href="#contact">GET A QUOTE <ArrowUpRight size={14}/></a></div>
    </div>{searchOpen && <div className="search-row"><form className="container search-box" onSubmit={(e) => {e.preventDefault();onSearch(searchText);setSearchOpen(false);document.querySelector('#products')?.scrollIntoView({behavior:'smooth'})}}><input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search products..." aria-label="Search products"/><button aria-label="Submit search"><Search size={17}/></button></form></div>}</header>
  </>;
}

function Hero() {
  const [active, setActive] = useState(0);
  const step = (direction) => setActive((active + direction + slides.length) % slides.length);
  return <section className="hero" id="home" style={{ backgroundImage: `url("${slides[active]}")` }} aria-label="Featured solutions">
    <div className="hero-shade"></div><div className="container hero-content"><span className="hero-kicker">TIMY · SMART SECURITY</span><h1>Intelligent access.<br/><em>Trusted everywhere.</em></h1><p>Biometric security and time attendance solutions, built around the way your business works.</p><a href="#products" className="button button-light">EXPLORE OUR PRODUCTS <ArrowRight size={16}/></a></div>
    <div className="hero-controls"><button onClick={() => step(-1)} aria-label="Previous slide"><ChevronLeft size={20}/></button><span>0{active + 1}<i></i>0{slides.length}</span><button onClick={() => step(1)} aria-label="Next slide"><ChevronRight size={20}/></button></div>
    <div className="hero-dots">{slides.map((_, i) => <button key={i} onClick={() => setActive(i)} className={active === i ? 'selected' : ''} aria-label={`Go to slide ${i + 1}`}/>)}</div>
  </section>;
}

function Stats() { return <section className="stats container" id="about">
  <div className="stat-intro"><span className="eyebrow">WHY CHOOSE US</span><h2>Security made<br/><em>thoughtful.</em></h2><p>We create practical biometric solutions that make everyday access safer and simpler.</p></div>
  <div className="stat"><strong>6000<span>+</span></strong><p>Devices in progress</p></div><div className="stat"><strong>130<span>+</span></strong><p>Countries of sale</p></div><div className="stat"><strong>3000<span>+</span></strong><p>Customers building</p></div>
</section>; }

function Solutions() { return <section className="solutions-section"><div className="container"><div className="section-head"><div><span className="eyebrow">DESIGNED FOR REAL WORK</span><h2>Various types of <em>solutions</em></h2></div><p>From a single entry point to a complete connected workplace, our solutions adapt to your needs.</p></div><div className="solution-grid">{solutions.map(([title, text], i) => <article className="solution-card" key={title}><div className="solution-number">0{i + 1}</div><div className="solution-icon">{['◎','▦','◈','◉','⌂','▣'][i]}</div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn about ${title}`}><ArrowUpRight size={17}/></a></article>)}</div></div></section>; }

function Products({ searchQuery }) {
  const [active, setActive] = useState('All Products');
  const [showAll, setShowAll] = useState(false);
  const visible = products.filter((p) => (active === 'All Products' || p.category === active) && p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const displayed = showAll ? visible : visible.slice(0, 8);
  return <section className="products-section" id="products"><div className="container"><div className="section-head product-head"><div><span className="eyebrow">OUR COLLECTION</span><h2>Featured <em>products</em></h2>{searchQuery && <p className="search-results">Showing matches for “{searchQuery}” <button onClick={() => window.dispatchEvent(new Event('clearProductSearch'))}>Clear</button></p>}</div><a href="#contact" className="text-link">View all products <ArrowRight size={16}/></a></div>
    <div className="category-tabs"><button className={active === 'All Products' ? 'active' : ''} onClick={() => {setActive('All Products');setShowAll(false)}}>All Products</button>{categories.map((cat) => <button className={active === cat.label ? 'active' : ''} onClick={() => {setActive(cat.label);setShowAll(false)}} key={cat.label}><span>{cat.icon}</span>{cat.label}</button>)}</div>
    {displayed.length ? <div className="product-grid">{displayed.map((p) => <article className="product-card" key={p.name}><a href="#contact" className="product-photo"><img loading="lazy" src={p.src} alt={p.name}/><span className="quick-arrow"><ArrowUpRight size={17}/></span></a><div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name}</h3><a href="#contact" className="product-inquire">REQUEST DETAILS <ArrowRight size={14}/></a></div></article>)}</div> : <div className="empty-products">No products match this search. Try another product name.</div>}
    {visible.length > 8 && <div className="center"><button className="button button-outline" onClick={() => setShowAll(!showAll)}>{showAll ? 'SHOW LESS' : 'LOAD MORE PRODUCTS'} <ArrowRight size={15}/></button></div>}
  </div></section>;
}

function Trust() { return <section className="trust-section"><div className="container trust-inner"><div className="trust-copy"><span className="eyebrow">BUILT ON EXPERIENCE</span><h2>Technology you can<br/><em>depend on.</em></h2><p>As a leading manufacturer in the industry, we are committed to providing our clients with innovative and reliable biometric solutions.</p><a href="#contact" className="button button-blue">OUR COMPANY <ArrowRight size={15}/></a></div><div className="trust-cards"><div className="trust-card"><ShieldCheck size={29}/><strong>National High-Tech<br/>Enterprise</strong><span>INNOVATION</span></div><div className="trust-card"><div className="iso">ISO<br/><b>9001</b></div><strong>ISO 9001, CE, FCC<br/>&amp; RoHS certified</strong><span>QUALITY ASSURED</span></div><div className="trust-card"><div className="oem">OEM<br/><b>/ ODM</b></div><strong>Flexible manufacturing<br/>partnerships</strong><span>BUILT FOR YOU</span></div></div></div></section>; }

function QuoteForm() {
  const [sent, setSent] = useState(false);
  return <section className="quote-section" id="contact"><div className="container quote-layout"><div className="quote-copy"><span className="eyebrow">LET'S BUILD SOMETHING SECURE</span><h2>Tell us what<br/><em>you need.</em></h2><p>Share a little about your project. Our team will help you find the right solution.</p><div className="contact-line"><span>EMAIL</span><a href="mailto:info@timyteco.net">info@timyteco.net</a></div><div className="contact-line"><span>CALL US</span><a href="tel:+8675583875070">+86-755-83875070</a></div></div>
    <form className="quote-form" onSubmit={(e) => {e.preventDefault(); setSent(true)}}><h3>Request more details</h3><p>Please fill out the form below and click the button to request more information about our solutions.</p><div className="form-grid"><label>First name<input required placeholder="Your first name"/></label><label>Last name<input required placeholder="Your last name"/></label><label>Email address<input required type="email" placeholder="you@company.com"/></label><label>Phone number<input type="tel" placeholder="Your phone number"/></label><label className="wide">Company<input placeholder="Company name"/></label><label className="wide">Message<textarea required placeholder="Tell us about your project" rows="3"/></label></div><button className="button button-blue" type="submit">{sent ? 'MESSAGE RECEIVED' : 'SEND YOUR REQUEST'} <ArrowRight size={15}/></button>{sent && <div className="form-success" role="status">Thank you. Our team will be in touch soon.</div>}</form>
  </div></section>;
}

function Footer() { const [subscribed, setSubscribed] = useState(false); return <footer className="footer"><div className="container footer-main"><div className="footer-brand"><img src={image('2403/27/photo/a08bedc5c2.png')} alt="TIMY"/><p>26 years professional manufacturer of AI biometric access control &amp; time attendance systems.</p><div className="socials"><a href="#contact" aria-label="LinkedIn">in</a><a href="#contact" aria-label="YouTube">▶</a><a href="#contact" aria-label="Facebook">f</a></div></div><div className="footer-column"><h4>Products</h4><a href="#products">Facial Recognition</a><a href="#products">Fingerprint Recognition</a><a href="#products">Smart Lock</a><a href="#products">RFID &amp; QR Readers</a><a href="#products">Access Controllers</a></div><div className="footer-column"><h4>Explore</h4><a href="#about">About Us</a><a href="#about">Company Technology</a><a href="#about">Certificates</a><a href="#contact">Contact Us</a><a href="#contact">Support &amp; Downloads</a></div><div className="footer-news"><h4>Stay in the loop</h4><p>Don't miss our news and product updates.</p><form onSubmit={(e) => {e.preventDefault();setSubscribed(true)}}><input required type="email" placeholder="Enter your email"/><button aria-label="Subscribe"><ArrowRight size={17}/></button></form>{subscribed && <small>Thanks for subscribing!</small>}<p className="footer-address">3rd Floor, Building A5, Silicon Valley Power Qinghu Park, Shenzhen, China</p></div></div><div className="container footer-bottom"><span>© 2026 TIMY Technology. All rights reserved.</span><span>POWERED BY UEESHOP</span></div></footer>; }

function App() { const [searchQuery, setSearchQuery] = useState(''); React.useEffect(() => { const clear = () => setSearchQuery(''); window.addEventListener('clearProductSearch', clear); return () => window.removeEventListener('clearProductSearch', clear); }, []); return <><Header onSearch={setSearchQuery}/><main><Hero/><Stats/><Solutions/><Products searchQuery={searchQuery}/><Trust/><QuoteForm/></main><Footer/><div className="cookie-note">We use cookies to improve your online experience. <a href="#contact">Learn more</a><button aria-label="Dismiss cookie notice" onClick={(e) => e.currentTarget.parentElement.remove()}><X size={14}/></button></div></>; }

createRoot(document.getElementById('root')).render(<App/>);
