import axios from 'axios';
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

  const checkBlock = {
    checkReference: [referenceValidation, reference, 'reference'],
    checkBookId: [bookIdValidation, bookId, 'bookId'],
    checkType: [typeValidation, type, 'type'],
    checkResourse: [resourceValidation, resource, 'resource'],
    checkFields: [fieldsValidation, fields, 'fields'],
  };

  Object.entries(checkBlock).map(([check, [validation, value, name]]) => {
    check = validation(value);
    if (check.error) {
      response.success = false;
      response.code = 100;
      response.message = 'Validation error';
      response.errors.push({
        field: name,
        message: check.message,
      });
    }
  });

  if (response.success) {
    axios
      .post(serverLink, {
        type,
        resource,
        bookId,
        reference,
        fields,
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        response.success = false;
        response.code = 101;
        response.message = 'Server error';
        response.errors = error;
        return response;
      });
  } else {
    return response;
  }
}
export default SendToTSV;
