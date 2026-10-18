import { render, screen } from "@testing-library/react"
import { App } from "./App"

beforeAll(() => {
  // jsdom has neither; plain functions so CRA's resetMocks leaves them alone.
  window.matchMedia = (query: string) =>
    ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} }) as unknown as MediaQueryList
  HTMLCanvasElement.prototype.getContext = () => null
})

test("renders the intro and every section", () => {
  render(<App />)
  expect(screen.getByRole("heading", { level: 1, name: "Hi, I'm Marvin." })).toBeInTheDocument()
  for (const name of ["Work", "Education", "Projects", "Say hello."]) {
    expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument()
  }
  expect(screen.getByRole("link", { name: /easygo/i })).toHaveAttribute("href", "https://easygo.io")
})
