const Log = ({i, str}) => { // {i, str}같은 것을 props라 부름
    return <p key={i+" "+str}> {str}</p>
}

export default Log