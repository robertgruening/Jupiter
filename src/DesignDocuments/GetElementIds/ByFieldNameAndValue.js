function(doc)
{
	if (doc.DocType != undefined && 
		doc.DocType == 'Data') 
	{
		var keys = Object.keys(doc.Felder);
		
		for (var i = 0; i < keys.length; i++)
		{
			var key = keys[i];
			var content = doc.Felder[keys[i]];
			
			if (Array.isArray(content))
			{
				for (var arrayIndex = 0; arrayIndex < content.length; arrayIndex++)
				{
					var value = content[arrayIndex];					
					
					for (var j = 0; j < value.length; j++)
					{
						emit([keys[i], value.toLowerCase().slice(j).trim()], doc._id);
					}
				}
			}
			else
			{
				var value = content;
			
				for (var j = 0; j < value.length; j++)
				{
					emit([keys[i], value.toLowerCase().slice(j).trim()], doc._id);
				}
			}			
		}
	}
}
