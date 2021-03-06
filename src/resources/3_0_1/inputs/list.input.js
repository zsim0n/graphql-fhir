const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary List Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'List_Input',
	description: 'Base StructureDefinition for List Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'List_Enum_input',
					values: { List: { value: 'List' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Identifier for the List assigned for business purposes outside the context of FHIR.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'Indicates the current state of this list.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the current state of this list.',
		},
		_mode: {
			type: require('./element.input.js'),
			description:
				'How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.',
		},
		_title: {
			type: require('./element.input.js'),
			description: 'A label for the list assigned by the author.',
		},
		title: {
			type: GraphQLString,
			description: 'A label for the list assigned by the author.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-example-codes
		code: {
			type: require('./codeableconcept.input.js'),
			description:
				'This code defines the purpose of the list - why it was created.',
		},
		subject: {
			type: GraphQLString,
			description:
				'The common subject (or patient) of the resources that are in the list, if there is one.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The encounter that is the context in which this list was created.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'The date that the list was prepared.',
		},
		date: {
			type: DateTimeScalar,
			description: 'The date that the list was prepared.',
		},
		source: {
			type: GraphQLString,
			description:
				'The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-order
		orderedBy: {
			type: require('./codeableconcept.input.js'),
			description: 'What order applies to the items in the list.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description: 'Comments that apply to the overall list.',
		},
		entry: {
			type: new GraphQLList(require('./listentry.input.js')),
			description: 'Entries in this list.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/list-empty-reason
		emptyReason: {
			type: require('./codeableconcept.input.js'),
			description: 'If the list is empty, why the list is empty.',
		},
	}),
});
