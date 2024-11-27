function Button ({className, style, onClick, children}) {
    return <button className={className} style={style} onClick={onClick}>{children}</button>
}
export default Button;