import {quran} from './all_quran.js'

var container = document.getElementById("container")

for (var i = 0; i < quran.length ; i++){
  var surrah = quran[i];
  const surrahNode = document.createElement('div')

  const surrahTitle = document.createElement('h1')
  surrahTitle.innerText = surrah.name_simple
  surrahTitle.className = "ar verse title"
  surrahNode.appendChild(surrahTitle)
  for (let verse of Object.entries(surrah.verses)){
    const verseNode = document.createElement('div')
    verseNode.className = "p-2 py-3"
    const verseAr = document.createElement('p')
    verseAr.innerHTML = `<b>${verse[1].verse_number.toLocaleString('ar-EG')}</b>` + ". " + verse[1].text_uthmani
    verseAr.className = "rtl ar verse pb-3"
    const verseFa = document.createElement('p')
    verseFa.innerHTML = verse[1].translations[1].text
    const verseEn = document.createElement('p')
    verseEn.innerHTML = verse[1].translations[0].text
    verseFa.className="rtl fa"
    verseEn.className="en"
    verseNode.appendChild(verseAr)
    verseNode.appendChild(verseFa)
    verseNode.appendChild(verseEn)
    surrahNode.appendChild(verseNode)
  }
  surrahNode.className="py-4"
  container.appendChild(surrahNode)
  container.appendChild(document.createElement('hr'))

}