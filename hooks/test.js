function Foo(props) {
    useEffect(() => {
      console.log(props.name);
    }, []); // <-- should error and offer autofix to [props.name]
}