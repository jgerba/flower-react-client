import classes from './SectionHeader.module.css';

function SectionHeader(props) {
    let header;
    props.smallHeader
        ? (header = (
              <h2
                  className={`${classes.header} ${
                      props.className ? props.className : ''
                  }`}
              >
                  {props.children}
              </h2>
          ))
        : (header = (
              <h1
                  className={`${classes.header} ${
                      props.className ? props.className : ''
                  }`}
              >
                  {props.children}
              </h1>
          ));

    return header;
}

export default SectionHeader;
