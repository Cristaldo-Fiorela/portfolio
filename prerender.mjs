// prerender.mjs
// Corre después de "vite build": levanta un preview server local,
// renderiza la página con Puppeteer, y sobreescribe dist/index.html
// con el HTML ya resuelto (con el contenido real adentro).

import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { writeFileSync } from 'fs'
import path from 'path'

async function run() {
  // Levanta el mismo build de dist/ que vas a deployar
  const server = await preview({
    preview: { port: 4173 },
  })
  const url = server.resolvedUrls.local[0]

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(url, { waitUntil: 'networkidle0' })

  // Esperá a que #root tenga contenido real adentro
  // (ajustá el selector si tu app tarda más en montar)
  await page.waitForFunction(
    () => document.querySelector('#root')?.children.length > 0,
    { timeout: 15000 }
  )

  const html = await page.content()

  const outPath = path.resolve('dist/index.html')
  writeFileSync(outPath, html)

  console.log('✅ dist/index.html reescrito con contenido prerenderizado')

  await browser.close()
  await server.httpServer.close()
}

run().catch((err) => {
  console.error('❌ Error en el prerender:', err)
  process.exit(1)
})
