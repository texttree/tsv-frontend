import { SendToTSV } from '../../components';

function SendError({ reference, bookId, resource, serverLink, fields }) {
  if (fields?.Quote && fields?.Note) {
    return SendToTSV({
      reference,
      bookId,
      resource,
      serverLink,
      fields: { Quote: fields.Quote, Note: fields.Note },
      type: 'err',
    });
  } else {
    return {
      success: false,
      code: 100,
      message: 'Fields not set', // текстовый вариант сообщения
      errors: [{ field: 'fields', error: 'Need Quote and Note' }],
    };
  }
}
export default SendError;
