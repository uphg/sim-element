import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'

const templateTag = /<[/]?template[^>]*>/

const scriptTagBefore = /<script[^>]*>/
const scriptTagAfter = /<\/script>/

const styleTagBefore = /<style[^>]*>/
const styleTagAfter = /<\/style>/

const html = (code, lang) =>
  Prism.highlight(code, Prism.languages[lang], lang)

const suffix = (rule, text) => {
  const regex = rule.exec(text)
  return text.slice(regex ? regex?.index + regex[0].length : 0)
}

const prefix = (rule, text) => {
  const regex = rule.exec(text)
  return text.slice(0, regex ? regex?.index : 0)
}

const getTagName = (text) => {
  return text.match(/(?<=<)[a-z]+\b/)?.[0]
}

const createLanguage = (codeNode, lang = 'html') =>
  `<span class="language-${lang}">${codeNode}</span>`

export const codeClassification = (code) => {
  const tagName = getTagName(code)
  if (tagName !== 'template') {
    if (tagName === 'script') {
      const scriptInfo = code.match(scriptTagBefore)?.[0]

      let scriptBlock = html(scriptInfo, 'html')

      const lang = (scriptInfo?.match(/(?<=lang=")[a-z]+(?=")/)?.[0] ||
        'js') 

      scriptBlock += `<span class="language-${lang}">`

      const scriptStart = suffix(scriptTagBefore, code)
      const prefixNode = prefix(scriptTagBefore, code)
      const scriptContent = prefix(scriptTagAfter, scriptStart)

      scriptBlock += html(scriptContent, lang)
      scriptBlock += '</span>'
      scriptBlock += html('</script>', 'html')

      return {
        html: prefixNode + scriptBlock,
        suffix: suffix(scriptTagAfter, scriptStart)
      }
    } else if (tagName === 'style') {
      const styleInfo = code.match(styleTagBefore)?.[0] 

      let styleBlock = html(styleInfo, 'html')

      const lang = (styleInfo?.match(/(?<=lang=")[a-z]+(?=")/)?.[0] ||
        'css') 

      styleBlock += `<span class="language-${lang}">`

      const styleStart = suffix(styleTagBefore, code)
      const prefixNode = prefix(styleTagBefore, code)
      const styleContent = prefix(styleTagAfter, styleStart)

      styleBlock += html(styleContent, lang)
      styleBlock += '</span>'
      styleBlock += html('</script>', 'html')

      return {
        html: prefixNode + styleBlock,
        suffix: suffix(styleTagAfter, styleStart)
      }
    }
  } else {
    let number = 0
    let before = ''
    let after = ''

    const pileUp = (code) => {
      if (templateTag.test(code)) {
        const templateTagText = code.match(templateTag)?.[0] 
        const startTag = templateTagText.match(/<[/]?template/)?.[0]
        let length = 0
        if (startTag === '<template') {
          number += 1
          length = 9
        } else if (startTag === '</template') {
          number -= 1
          length = 11
        }

        before += code.slice(0, code.search(templateTag) + length)
        if (number <= 0) {
          after = code.slice(code.search(templateTag) + length)
          return
        }
        pileUp(code.slice(code.search(templateTag) + length))
      }
    }

    pileUp(code)

    return {
      html: createLanguage(html(before, 'html')),
      suffix: after
    }
  }
}

export const vueSyntaxHighlight = (demo) => {
  let codeHtml = ''
  const createCode = (demo) => {
    const codeBlock = codeClassification(demo)
    if (!(codeBlock && codeBlock.html)) return
    codeHtml += codeBlock.html
    createCode(codeBlock.suffix)
  }

  createCode(demo)
  return codeHtml
}
