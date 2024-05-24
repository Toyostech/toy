const Wrapper = (props) => {
    return props.children
 }
export default Wrapper;

//Wrapper is an empty component that does not have any HTML element
// We use is because of JXS requirment
// Another Method is By using React.Fragment
// Another is by using <> </> but your
// project must support this method