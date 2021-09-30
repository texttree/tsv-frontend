import { ALL_BOOKS as BOOKS, TYPES } from './config';

export const referenceValidation = (reference) => {
  const result = { error: true, message: '' };
  if (typeof reference != 'string') {
    result.message = 'The field must be a string.';
    return result;
  }
  reference = reference.trim();
  if (reference == '') {
    result.message = 'The field must not be empty.';
    return result;
  }
  const regexReference = /\d+\:\d+([abc]?)(\-\d+)?[abc]?/;
  const checkReference = regexReference.test(reference);
  if (checkReference) {
    result.error = false;
    return result;
  } else {
    result.message = 'Wrong format. Check out the documentation.';
    return result;
  }
};

export const bookIdValidation = (bookId) => {
  const result = { error: true, message: '' };
  if (typeof bookId != 'string') {
    result.message = 'The field must be a string.';
    return result;
  }
  bookId = bookId.trim();
  if (bookId == '') {
    result.message = 'The field must not be empty.';
    return result;
  }
  if (BOOKS.includes(bookId)) {
    result.error = false;
    return result;
  } else {
    result.message = 'Wrong format. Check out the documentation.';
    return result;
  }
};

export const typeValidation = (type) => {
  const result = { error: true, message: '' };
  if (typeof type != 'string') {
    result.message = 'The field must be a string.';
    return result;
  }
  type = type.trim();
  if (type == '') {
    result.message = 'The field must not be empty.';
    return result;
  }
  if (TYPES.includes(type)) {
    result.error = false;
    return result;
  } else {
    result.message = 'Wrong format. Check out the documentation.';
    return result;
  }
};

export const resourceValidation = (resource) => {
  const result = { error: true, message: '' };
  if (typeof resource != 'string') {
    result.message = 'The field must be a string.';
    return result;
  }
  resource = resource.trim();
  if (resource == '') {
    result.message = 'The field must not be empty.';
    return result;
  }
  const regexResource = /^[a-z][a-z_-]*$/i;
  const checkResource = regexResource.test(resource);
  if (checkResource) {
    result.error = false;
    return result;
  } else {
    result.message = 'Wrong format. Check out the documentation.';
    return result;
  }
};

export const fieldsValidation = (fields) => {
  const result = { error: true, message: '' };
  if (!fields) {
    result.message = 'The field must not be null.';
    return result;
  }
  if (typeof fields != 'object') {
    result.message = 'The field must be an object.';
    return result;
  }
  if (Object.keys(fields).length > 0) {
    result.error = false;
    return result;
  } else {
    result.message = 'The field must not be empty.';
    return result;
  }
};
