import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    b: {},
    bl: {}
  },

  prose: {
    code: {
      block: {
        border: {
          color: {
            initial: 'var(--color-blue-200',
            dark: '#201E1B'
          }
        }
      }
    }
  }
})