import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { URL } from 'node:url'

const source = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')

test('personal identity and curriculum are prominent', () => {
  assert.match(source, /Ronael Moura\.<br \/><em>Desenvolvedor Full Stack/)
  assert.match(source, /curriculo-ronael-moura\.pdf/)
  assert.match(html, /Portfólio de Ronael Moura \| Desenvolvedor Full Stack/)
})

test('projects precede professional experience', () => {
  assert.ok(source.indexOf('<section className="projects-section"') < source.indexOf('<section className="current-work-section"'))
  assert.match(source, /\['backend', 'opensource', 'client', 'frontend'\]/)
})

test('test counts distinguish CI from local integration', () => {
  assert.match(source, /307 unitários de backend e 54 de frontend no CI, mais 9 de integração/)
  assert.match(source, /MySQL · local/)
  assert.doesNotMatch(source, /100% passing|quality signal|últimos 7 ciclos/)
})

test('illustrations and demo are not presented as measured business outcomes', () => {
  assert.match(source, /dados fictícios, não métricas de clientes/)
  assert.match(source, /não representa uma operação comercial/)
  assert.doesNotMatch(source, /18ms|produção real|@ronas\/multer-safe-limit/)
})

test('canonical URL points to personal portfolio', () => {
  assert.match(html, /rel="canonical" href="https:\/\/ronaelmoura.github.io\/portfolio-ronael-moura\/"/)
})

test('command menu uses a native modal and respects reduced motion', () => {
  assert.match(source, /<dialog ref=\{dialogRef\}/)
  assert.match(source, /dialog\.showModal\(\)/)
  assert.match(source, /onCancel=/)
  assert.match(source, /prefers-reduced-motion: reduce/)
})

test('tabs and filters expose selection and keyboard controls', () => {
  assert.match(source, /aria-controls="case-panel"/)
  assert.match(source, /role="tabpanel"/)
  assert.match(source, /ArrowRight/)
  assert.match(source, /ArrowLeft/)
  assert.match(source, /aria-pressed=\{activeFilter === key\}/)
})
