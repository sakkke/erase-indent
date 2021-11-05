import { Main as Eraser } from './main'

test('hasErased to true', () => {
  const eraser = new Eraser(`  function main () {
    // ok
  }`)
  expect(eraser.hasErased).toBe(true)
})

test('hasErased to true with including empty lines', () => {
  const eraser = new Eraser(`  function main () {
    // ok
  }

  main()

  main()`)
  expect(eraser.hasErased).toBe(true)
})

test('hasErased to false', () => {
  const eraser = new Eraser(`function main () {
  // ok
}`)
  expect(eraser.hasErased).toBe(false)
})

test('hasErased to false with including empty lines', () => {
  const eraser = new Eraser(`function main () {
  // ok
}

main()

main()`)
  expect(eraser.hasErased).toBe(false)
})

test('erase successful', () => {
  const eraser = new Eraser(`  function main () {
    // ok
  }`)
  eraser.erase()
  expect(eraser.string).toBe(`function main () {
  // ok
}`)
})

test('erase successful with including empty lines', () => {
  const eraser = new Eraser(`  function main () {
    // ok
  }

  main()

  main()`)
  eraser.erase()
  expect(eraser.string).toBe(`function main () {
  // ok
}

main()

main()`)
})

test('erase successful with including empty lines and two levels of nesting', () => {
  const eraser = new Eraser(`    function main () {
      // ok
    }

    main()

    main()`)
  eraser.erase()
  expect(eraser.string).toBe(`function main () {
  if (true) {
    // ok
  }
}

main()

main()`)
})
