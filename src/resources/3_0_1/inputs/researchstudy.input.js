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

/**
 * @name exports
 * @summary ResearchStudy Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ResearchStudy_Input',
	description: 'Base StructureDefinition for ResearchStudy Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ResearchStudy_Enum_input',
					values: { ResearchStudy: { value: 'ResearchStudy' } },
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
				'Identifiers assigned to this research study by the sponsor or other systems.',
		},
		_title: {
			type: require('./element.input.js'),
			description: 'A short, descriptive user-friendly label for the study.',
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive user-friendly label for the study.',
		},
		protocol: {
			type: new GraphQLList(GraphQLString),
			description:
				'The set of steps expected to be performed as part of the execution of the study.',
		},
		partOf: {
			type: new GraphQLList(GraphQLString),
			description:
				'A larger research study of which this particular study is a component or step.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The current state of the study.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/research-study-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the study.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.',
		},
		focus: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in learning more about or engaging with the study.',
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.input.js')),
			description: 'Citations, references and other related documents.',
		},
		keyword: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Key terms to aid in searching for or filtering the study.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Indicates a country, state or other region where the study is taking place.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'A full description of how the study is being conducted.',
		},
		description: {
			type: GraphQLString,
			description: 'A full description of how the study is being conducted.',
		},
		enrollment: {
			type: new GraphQLList(GraphQLString),
			description:
				"Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. ' 200 female Europeans between the ages of 20 and 45 with early onset diabetes'.",
		},
		period: {
			type: require('./period.input.js'),
			description:
				'Identifies the start date and the expected (or actual, depending on status) end date for the study.',
		},
		sponsor: {
			type: GraphQLString,
			description:
				'The organization responsible for the execution of the study.',
		},
		principalInvestigator: {
			type: GraphQLString,
			description:
				'Indicates the individual who has primary oversite of the execution of the study.',
		},
		site: {
			type: new GraphQLList(GraphQLString),
			description:
				'Clinic, hospital or other healthcare location that is participating in the study.',
		},
		reasonStopped: {
			type: require('./codeableconcept.input.js'),
			description:
				'A description and/or code explaining the premature termination of the study.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Comments made about the event by the performer, subject or other participants.',
		},
		arm: {
			type: new GraphQLList(require('./researchstudyarm.input.js')),
			description:
				'Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.',
		},
	}),
});
