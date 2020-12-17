const validate = value => {
  const errors = {}
  if (!value.title) {
    errors.title = 'Required title'
  } else if (value.title.trim() && value.title.length < 5) {
    errors.title = 'Must be 5 characters or more'
  }
  return errors;
};

export default validate;