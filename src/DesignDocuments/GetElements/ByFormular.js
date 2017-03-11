function(doc)
{
	if (doc.DocType != undefined && 
		doc.DocType == 'Data')
	{
		emit(doc.Formular, doc);
	}
}
