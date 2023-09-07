function MenuBtn(props) {
    return (
        <button className={`button ${props.blank ? 'blank' : ''}`}>
            {props.children}
        </button>
    );
}

export default MenuBtn;
