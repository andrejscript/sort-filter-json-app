const deleteObjProps = (obj) => {
  let props = Object.keys(obj);
  for (var i = 0; i < props.length; i++) {
    delete obj[props[i]];
  }
}

export default deleteObjProps;