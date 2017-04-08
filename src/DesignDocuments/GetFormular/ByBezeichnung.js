function(doc) {
	if (doc.DocType != undefined &&
		doc.DocType == "Formular")
	{
		emit(doc.Bezeichnung, doc);
	}
}
