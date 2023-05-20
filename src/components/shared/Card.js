import PropTypes from "prop-types"

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
}

// set default value for reverse props
Card.defaultProps = {
    reverse: false
}

// setting the props type of props
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
export default Card