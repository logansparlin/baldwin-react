if(Meteor.isServer) {
	if (Sections.find().count() === 0) {
		Sections.insert({
			"title":"Men's Collection",
			"slug":"mens-collection",
			"hero_image":"BALDWIN_MEN_COLLECTION.jpg",
			"ref_id":"bdwn1"
		});
		Sections.insert({
			"title":"Women's Collection",
			"slug":"womens-collection",
			"hero_image":"BALDWIN_WOMENS_COLLECTION.jpg",
			"ref_id":"bdwn2"
		});
	}
	if (Products.find().count() === 0) {
		Products.insert({
			"title":"Heather Grey Logo Hat",
			"slug":"heather-grey-logo-hat",
			"categories": [
				"mens",
				"hats"
			],
			"parent_ref":"bdwn1"
		});
		Products.insert({
			"title":"Heather Grey Logo Hat",
			"slug":"heather-grey-logo-hat",
			"categories": [
				"mens",
				"hats"
			],
			"parent_ref":"bdwn1"
		});
		Products.insert({
			"title":"Heather Grey Logo Hat",
			"slug":"heather-grey-logo-hat",
			"categories": [
				"mens",
				"hats"
			],
			"parent_ref":"bdwn1"
		});
		Products.insert({
			"title":"Heather Grey Logo Hat",
			"slug":"heather-grey-logo-hat",
			"categories": [
				"mens",
				"hats"
			],
			"parent_ref":"bdwn1"
		});
		Products.insert({
			"title":"Navy Blue Logo Hat",
			"slug":"navy-blue-logo-hat",
			"categories": [
				"mens",
				"womens",
				"hats"
			],
			"parent_ref":"bdwn2"
		});
		Products.insert({
			"title":"Navy Blue Logo Hat",
			"slug":"navy-blue-logo-hat",
			"categories": [
				"mens",
				"womens",
				"hats"
			],
			"parent_ref":"bdwn2"
		});
		Products.insert({
			"title":"Navy Blue Logo Hat",
			"slug":"navy-blue-logo-hat",
			"categories": [
				"mens",
				"womens",
				"hats"
			],
			"parent_ref":"bdwn2"
		});
		Products.insert({
			"title":"Navy Blue Logo Hat",
			"slug":"navy-blue-logo-hat",
			"categories": [
				"mens",
				"womens",
				"hats"
			],
			"parent_ref":"bdwn2"
		});
	}
}
