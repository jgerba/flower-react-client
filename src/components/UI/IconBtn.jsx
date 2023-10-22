function IconBtn(props) {
    return (
        <button
            type="button"
            className={props.className}
            onClick={props.onClick}
        >
            <img src={props.src} alt={props.alt} />
        </button>
    );
}

export default IconBtn;
