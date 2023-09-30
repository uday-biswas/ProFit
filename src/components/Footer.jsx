function Footer(props) {
    const classy = props.className;
    return (
        <div className={classy}>
            {props.children}
        </div>
    );
}

export default Footer;