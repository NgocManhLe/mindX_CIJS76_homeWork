function NameCard(text) {
    return(
        <li className="listApp__item">
        <p>{text.p}</p>
        </li>
    )
}

ReactDOM.render(
    <div>
        <NameCard p = "clear up bedroom"/>
        <NameCard p = "buy some milk" />
        <NameCard p = "jogging" />
        <NameCard p = "learn react" />
        <NameCard p = "doing exercises" />
    </div>
    ,
    document.getElementById('listApp__list'));