const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Organization Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Organization',
	description: 'Base StructureDefinition for Organization Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Organization_Enum_schema',
					values: { Organization: { value: 'Organization' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Identifier for the organization that is used to identify the organization across multiple disparate systems.',
		},
		_active: {
			type: require('./element.schema.js'),
			description: "Whether the organization's record is still in active use.",
		},
		active: {
			type: GraphQLBoolean,
			description: "Whether the organization's record is still in active use.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/organization-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The kind(s) of organization that this is.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'A name associated with the organization.',
		},
		name: {
			type: GraphQLString,
			description: 'A name associated with the organization.',
		},
		_alias: {
			type: require('./element.schema.js'),
			description:
				'A list of alternate names that the organization is known as, or was known as in the past.',
		},
		alias: {
			type: new GraphQLList(GraphQLString),
			description:
				'A list of alternate names that the organization is known as, or was known as in the past.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description: 'A contact detail for the organization.',
		},
		address: {
			type: new GraphQLList(require('./address.schema.js')),
			description: 'An address for the organization.',
		},
		partOf: {
			type: new GraphQLUnionType({
				name: 'OrganizationpartOf_partOf_Union',
				description:
					'The organization of which this organization forms a part.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The organization of which this organization forms a part.',
		},
		contact: {
			type: new GraphQLList(require('./organizationcontact.schema.js')),
			description: 'Contact for the organization for a certain purpose.',
		},
		endpoint: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Organizationendpoint_endpoint_Union',
					description:
						'Technical endpoints providing access to services operated for the organization.',
					types: () => [require('./endpoint.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Endpoint') {
							return require('./endpoint.schema.js');
						}
					},
				}),
			),
			description:
				'Technical endpoints providing access to services operated for the organization.',
		},
	}),
});
