import './index.scss'

const AnimatedLetters = ({style, letterClass, strArray, idx }) => {
  return (
    <span style={style}>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
