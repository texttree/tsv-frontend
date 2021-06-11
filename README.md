### Purpose

The main task of the component is to send data in TSV format. The TSV file is created using the server settings and the second part of the [tsv-send-backend component](https://github.com/texttree/tsv-send-backend/).

## SendToTSV

SendToTSV is the basic component. It passes the required minimum 3 values to the table.

### Using

1. Configure the server to accept the TSV file. The instructions are here [tsv-send-backend component](https://github.com/texttree/tsv-send-backend/).
2. Insert your data for transmission. The component accepts 6 required parameters:

- `resource` - resourceId of material(rob,rlob,rsob and others). Type of data - `string`.
- `type` - type of sending. Now that is `['tn', 'tq', 'sn', 'sq', 'twl', 'err']`. Type of data - `string`.
- `reference` - reference of your data. It looks like this `1:1`. Type of data - `string`
- `bookId`- one of the 66 bookId's. It looks like this `gen`. Type of data - `string`
- `serverLink` - the link of the configured server that transmits the data to TSV-files.Type of data - `string`.
- `fields` - additional parameter for for advanced components. Type of data - `object`.

### Result

TSV is created on the server in this way: resourse/type_bookID. For example:

- `resource='rsob'`
- `type='err'`
- `reference='1:2'`
- `bookId='gen''`
- `fields: {Note: '', Quote: ''}` -It is important that the names of fields in the table match the parameters in the object.

On the server it will look like this:

![eror_example](https://user-images.githubusercontent.com/74174349/120419545-5f235480-c36b-11eb-828e-767b5027b03e.png)

In TSV:

![TSV](https://user-images.githubusercontent.com/74174349/120419901-fc7e8880-c36b-11eb-8af6-bdc4ac8f8dd7.jpg)

## SendError

SendError extends the functionality SendToTSV. It is used to transmit errors in translations

### Using

The component accepts 5 required parameters (`resource,reference,bookId, serverLink,fields`).

To transmit an error, 2 additional values are passed :

`fields: {

    Quote: // -  text of the found error
    Note: // - comment of the person who found the error

}`

### Result

In TSV:

![Example](https://user-images.githubusercontent.com/74174349/120422054-2b96f900-c370-11eb-84d3-421875853791.png)
