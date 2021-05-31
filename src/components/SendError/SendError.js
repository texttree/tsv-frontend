import { SendToTSV } from '../../components';

function SendError({ reference, bookId, resource, serverLink, fields }) {
  if (fields?.quote && fields?.comment) {
    return SendToTSV({
      reference,
      bookId,
      resource,
      serverLink,
      fields: { quote: fields.quote, comment: fields.comment },
      type: 'err',
    });
  } else {
    return {
      success: false,
      code: 100,
      message: 'Fields not set', // текстовый вариант сообщения
      errors: [{ field: 'fields', error: 'Need quote and comment' }],
    };
  }
}
export default SendError;
