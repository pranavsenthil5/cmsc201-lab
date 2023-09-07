const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      backgroundColor: 'white'
    }}>
      <small>
        <time>{YEAR}</time> © Pranav Vedasendur Senthilvel.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  )
}
