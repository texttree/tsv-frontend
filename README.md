### Purpose

The main task of the component is to send data in TSV format. The TSV file is created using the server settings and the second part of the [tsv-send-backend component](https://github.com/texttree/tsv-send-backend/).

##
SendToTSV

### Using
1. Configure the server to accept the TSV file. The instructions are here [tsv-send-backend component](https://github.com/texttree/tsv-send-backend/).
2. Insert your data for transmission. 
3. The component accepts 4 required parameters:
* `resource` - resourseId of material(rob,rlob,rsob and others). Type of data - `string`.
* `type` - type of sending. Now that is `['tn', 'tq', 'sn', 'sq', 'twl', 'err']`. Type of data - `string`.
* `reference` - reference of your data. It looks like this `1:1`. Type of data - `string`
* `bookId`- one of the 66 bookId's. It looks like this `gen`. Type of data - `string`
* `serverLink` - the link of the configured server that transmits the data to TSV-files.Type of data - `string`.
