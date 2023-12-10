import DarkModetoggle from '../DarkModetoggle.vue'

describe('<DarkModetoggle>', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('mounts', () => {
    cy.mount(DarkModetoggle, {
      props: {
        //
      },
    })
  })
})
