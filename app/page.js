const BOOK="https://www.fresha.com/a/skin-sculpt-tukums-tukums-pasta-iela-11-sjn073od";
const specialists=["Rūta","Endija","Veronika","Vanesa"];
const services=[
  ["Sejas procedūras","#first-visit"],
  ["Ķermeņa procedūras","#contact"],
  ["Endosfēras terapija","/endosfera"]
];
export default function Home(){return <main>
<header className="nav"><a className="brand" href="/">S&S</a><nav><a href="#proceduras">Procedūras</a><a href="#par">Par mums</a><a href="#specialistes">Speciālistes</a><a href="#atsauksmes">Atsauksmes</a></nav><a className="button small" href={BOOK}>Pieteikt vizīti</a><button className="menuButton" aria-label="Atvērt izvēlni"><span/><span/></button></header>
<section className="clinicHero"><div className="clinicHeroImage"/><div className="clinicHeroShade"/><div className="clinicHeroInner"><p className="eyebrow">ESTĒTISKĀS KOSMETOLOĢIJAS CENTRS · TUKUMS</p><h1>Rūpes par ādu</h1><p>Mūsdienīgas sejas un ķermeņa procedūras ādas kvalitātei, figūrai un labsajūtai.</p><a className="button heroButton" href={BOOK}>Pieteikt vizīti</a></div></section>

<section className="v2Section proceduresV21" id="proceduras"><div className="sectionHead"><div><h2>Izvēlies procedūru</h2></div><p>Atrodi sev piemērotāko sejas vai ķermeņa procedūru.</p></div><div className="serviceTiles">{services.map(([title,href])=><a className="serviceTile" href={href} key={title}><div className="serviceTileShade"/><div className="serviceTileLabel"><h3>{title}</h3><span>→</span></div></a>)}</div></section>

<section className="proofStrip"><div><strong>5.0</strong><span>Fresha</span></div><div><strong>340+</strong><span>vērtējumi</span></div><div><strong>4</strong><span>speciālistes</span></div><div><strong>Tukums</strong><span>Pasta iela 11</span></div></section>

<div className="storyZone"><section className="v2Section aboutV2" id="par"><div className="imagePlaceholder aboutImage"/><div className="aboutCopy"><p className="eyebrow">PAR SKIN & SCULPT</p><h2>Par Skin & Sculpt</h2><p>Skin & Sculpt ir estētiskās kosmetoloģijas centrs Tukumā, kas apvieno mūsdienīgas tehnoloģijas ar rūpīgu pieeju sejas un ķermeņa kopšanai.</p><a className="textLink" href="#contact">Kontakti →</a></div></section>

<section className="v2Section teamV21" id="specialistes"><div className="sectionHead simple"><div><h2>Mūsu speciālistes</h2></div></div><div className="teamGrid">{specialists.map(name=><article className="teamCard" key={name}><div className="portraitPlaceholder"/><h3>{name}</h3></article>)}</div></section></div>

<section className="reviewsV2 reviewsWithCards" id="atsauksmes"><div className="reviewsScore"><strong>5.0</strong><p>340+ Fresha vērtējumi</p><a className="textLink" href={BOOK}>Apskatīt visas →</a></div><div className="reviewCards realReviews"><article><p>“Ļoti patīkama pieredze, brīnišķīga speciāliste.”</p><span>Madara S. · Fresha</span></article><article><p>“Brīnišķīga apkalpošana un patīkama atmosfēra. Paldies!”</p><span>Linda G. · Fresha</span></article><article><p>“Loti atrs un kvalitativs darbs, milzigs paldies!!”</p><span>Tīna K. · Fresha</span></article></div><div className="reviewProgress" aria-hidden="true"><span /></div></section>

<section className="firstVisitV2" id="first-visit"><div><p className="eyebrow firstVisitEyebrow">PIRMĀ VIZĪTE</p><h2>Nezini, ko izvēlēties?</h2><p>Pirmreizējā vizīte palīdzēs saprast Tavas ādas vajadzības un izvēlēties piemērotāko turpmāko kopšanu.</p><strong>Konsultācija + sejas procedūra · no 55 €</strong><a className="button" href={BOOK}>Pieteikt pirmo vizīti</a></div></section>

<section className="v2Section contactV2" id="contact"><div className="contactCopy"><h2>Gaidīsim Tukumā</h2><p>Pasta iela 11<br/>Tukums</p><a href="tel:+37120277100">20277100</a><br/><a className="button contactButton" href={BOOK}>Pieteikt vizīti</a></div><div className="mapEmbedV2"><iframe title="Skin & Sculpt atrašanās vieta" src="https://www.google.com/maps?q=Pasta+iela+11,+Tukums,+Latvia&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div></section>

<footer className="footerV2"><a className="brand" href="/">S&S</a><div><a href="#proceduras">Procedūras</a><a href="#par">Par mums</a><a href="#specialistes">Speciālistes</a></div><div><a href="https://www.instagram.com/skinandsculpt.tukums/">Instagram</a><a href={BOOK}>Fresha</a></div><p>Pasta iela 11, Tukums<br/>© Skin & Sculpt</p></footer>
</main>}