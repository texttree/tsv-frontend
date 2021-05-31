import {
  referenceValidation,
  bookIdValidation,
  typeValidation,
  resourceValidation,
  fieldsValidation,
} from '../../common/validation';

function SendToTSV({ reference, bookId, type, resource, serverLink, fields }) {
  const response = {
    success: true, // true or false
    code: 200, // нужно в документации все варианты кодов ошибок указать
    message: 'Sending was successful', // текстовый вариант сообщения
    errors: [],
    /** массив из ошибок для валидации полей.
     * что-то типа [
     *  {field: 'reference', error: 'invalid format'},
     *  {field: 'fields', error: 'empty'}
     * ]  */
  };

const checkBlock={
  checkReference:[referenceValidation, reference],
  checkBookId: [bookIdValidation,bookId],
  checkType:[typeValidation,type],
  checkResourse:[resourceValidation,resource]
};


// console.log(Object.entries(checkBlock));

Object.entries(checkBlock).map( ([check,[validation,value]])=>{
check = validation(value);
if (check.error) {
  response.success = false;
  response.code = 100;
  response.message = 'Validation error';
  response.errors.push({
    field: 'value',
    message: check.message,
});
}});


  // const checkReference = referenceValidation(reference);
  // if (checkReference.error) {
  //   response.success = false;
  //   response.code = 100; // validation error
  //   response.message = 'Validation error';
  //   response.errors.push({
  //     field: 'reference',
  //     message: checkReference.message,
  //   });
  // }

  // const checkBookId = bookIdValidation(bookId);
  // if (checkBookId.error) {
  //   response.success = false;
  //   response.code = 100; // validation error
  //   response.message = 'Validation error';
  //   response.errors.push({
  //     field: 'bookId',
  //     message: checkBookId.message,
  //   });
  // }

  // const checkType = typeValidation(type);
  // if (checkType.error) {
  //   response.success = false;
  //   response.code = 100; // validation error
  //   response.message = 'Validation error';
  //   response.errors.push({
  //     field: 'type',
  //     message: checkType.message,
  //   });
  // }

  // const checkResource = resourceValidation(resource);
  // if (checkResource.error) {
  //   response.success = false;
  //   response.code = 100; // validation error
  //   response.message = 'Validation error';
  //   response.errors.push({
  //     field: 'resource',
  //     message: checkResource.message,
  //   });
  // }

  // const checkFields = fieldsValidation(fields);
  // if (checkFields.error) {
  //   response.success = false;
  //   response.code = 100; // validation error
  //   response.message = 'Validation error';
  //   response.errors.push({
  //     field: 'fields',
  //     message: checkFields.message,
  //   });
  // }

  if (response.success) {
    fetch(serverLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'resource=' +
        encodeURIComponent(resource) +
        '&bookId=' +
        encodeURIComponent(bookId) +
        '&reference=' +
        encodeURIComponent(reference) +
        '&type=' +
        encodeURIComponent(type) +
        '&fields=' +
        encodeURIComponent(JSON.stringify(fields)),
    });
  }

  return response;
}
export default SendToTSV;
